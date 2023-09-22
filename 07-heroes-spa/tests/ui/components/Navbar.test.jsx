const { render, screen, fireEvent } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { AuthContext } = require('../../../src/auth/context/AuthContext');
const { Navbar } = require('../../../src/ui/components/Navbar');

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
    const contextValue = {
        logged: true,
        user: {
            name: 'Daniel Augusto',
            id: '123',
        },
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Daniel Augusto')).toBeTruthy();
    });

    test('Debe llamar el logout y navigate cuando se oprime el botón', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    });
});
