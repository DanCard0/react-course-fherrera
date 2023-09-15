import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../src/09-useContext/routesConfig';

describe('Pruebas en <MainApp />', () => {
    test('Debe mostrar el HomePage', () => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        expect(head).toContain('HomePage');
    });

    test('Debe mostrar el LoginPage', () => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ['/login'] });

        render(<RouterProvider router={router} />);

        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        expect(head).toContain('LoginPage');
    });
});
