import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={ () => {} } />);
        const inputBox = screen.getByRole('textbox');
        fireEvent.input(inputBox, { target: { value: inputValue } });
        // screen.debug();
        expect(inputBox.value).toBe(inputValue);
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const inputBox = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(inputBox, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(inputBox.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar inNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});
