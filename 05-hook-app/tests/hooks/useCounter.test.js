import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter', () => {
    const initialValue = 100;

    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual( expect.any(Function) );
        expect(increment).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );
    });

    test('Debe generar counter con valor de 100', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    });

    test('Debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment } = result.current;
        
        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(initialValue + 3);
    });

    test('Debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement } = result.current;
        
        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(initialValue - 3);
    });

    test('Debe resetear el contador', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment, reset } = result.current;
        
        act(() => {
            increment(1);
            reset();
        });

        expect(result.current.counter).toBe(initialValue);
    });
});
