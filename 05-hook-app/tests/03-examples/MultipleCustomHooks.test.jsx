import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    const quoteData = { author: 'Daniel', quote: 'Hola mundo'};

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        // screen.debug();
        expect(screen.getByText('BreakingBad Quotes'));
        expect(screen.getByText('Loading...'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [quoteData],
            isLoading: false,
            hasError: null,
        });
        
        render(<MultipleCustomHooks />);
        expect(screen.getByText(quoteData.quote)).toBeTruthy();
        expect(screen.getByText(quoteData.author)).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe llamar la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: [quoteData],
            isLoading: false,
            hasError: null,
        });
        
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });
});
