import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrarse con valores por defecto', () => {
        const { container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar a Batman y el querystring con el valor respectivo', () => {
        const inputValue = 'batman';

        render(
            <MemoryRouter initialEntries={[`/search?q=${inputValue}`]}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const img = screen.getByRole('img');
        const errorDiv = screen.getByLabelText('error-div');
        expect(input.value).toBe(inputValue);
        expect(img.src).toContain(`/assets/dc-${inputValue}.jpg`);
        expect(errorDiv.style.display).toBe('none');
    });

    test('Debe mostrar un error si no se encuentra el hero', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const errorDiv = screen.getByLabelText('error-div');
        expect(errorDiv.style.display).toBe('');
    });

    test('Debe llamar navigate a la pantalla nueva', () => {
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue }});
        fireEvent.submit(form);
        
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
});
