import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Daniel',
        email: 'daniel@abc.com',
    };

    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Debe cambiar el valor de un campo del formulario', () => {
        const newValue = 'Augusto';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe resetear el formulario', () => {
        const newValue = 'Augusto';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
