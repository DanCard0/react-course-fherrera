import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en el <PrivateRoute />', () => {
    test('Debe mostrar el children si está autenticado', () => {
        Storage.prototype.setItem = jest.fn();
        const uri = '/search?q=batman';

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Augusto',
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={[uri]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', uri);
    });
});
