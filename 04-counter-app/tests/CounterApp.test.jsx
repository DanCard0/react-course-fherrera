import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 5;
    test('Debe hacer match con el snapshot', () => {        
        const { container } = render(<CounterApp initialValue={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el initialValue exacto', () => {
        render(<CounterApp initialValue={initialValue} />);
        // screen.debug();
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

    test('Debe incrementar el valor +1', () => {
        render(<CounterApp initialValue={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('Debe decrementar el valor -1', () => {
        render(<CounterApp initialValue={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('Debe funcionar el botón Reset', () => {
        render(<CounterApp initialValue={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});
