import { types, authReducer } from "../../../src/auth";

describe('Pruebas en authReducer', () => {
    const initialState = { logged: false };

    test('Debe retornar el estado por defecto', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe llamar el login, autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Daniel',
                id: '123',
            }
        };
        const state = authReducer(initialState, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });

    test('Debe llamar logout y retornar el estado de sesión cerrada', () => {
        const state = {
            logged: true,
            user: { name: 'Daniel', id: '123' }
        };

        const action = { type: types.logout };

        const newState = authReducer(state, action);

        expect(newState).toEqual(initialState);
    });
});
