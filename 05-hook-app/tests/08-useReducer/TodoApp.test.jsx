import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks';

jest.mock('../../src/hooks');

describe('Pruebas en <TodoApp />', () => {
    const desc1 = 'Comprar cosas';
    const desc2 = 'Comprar comida';

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: desc1, done: false, },
            { id: 2, description: desc2, done: true, },
        ],
        handleRemoveTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        calculatePendingTodos: jest.fn(() => 1),
    });

    test('Debe mostrar el componente correctamente', () => {
        render(<TodoApp />);
        expect(screen.getByText(desc1)).toBeTruthy();
        expect(screen.getByText(desc2)).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});
