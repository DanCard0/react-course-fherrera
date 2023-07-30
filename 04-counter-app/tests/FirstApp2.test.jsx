import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola Daniel';
    const subtitle = 0;

    test('Debe hacer match con el snapshot', () => {        
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el título exacto', () => {
        render(<FirstApp title={title} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtítulo mostrado por props', () => {
        
        render(<FirstApp title={title} subtitle={subtitle} />);
        expect(screen.getByText(`Valor: ${subtitle}`)).toBeTruthy();
        // expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});
