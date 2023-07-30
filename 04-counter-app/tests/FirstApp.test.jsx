import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const title = 'Hola Daniel';
    //     const { container } = render(<FirstApp title={title} />);
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola Daniel';
        const { container, getByText } = render(
            <FirstApp
                title={title}
            />
        );
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
    });

    test('Debe mostrar el subtítulo mostrado por props', () => {
        const title = 'Hola Daniel';
        const subtitle = 0;
        const { getByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(getByText(`Valor: ${subtitle}`)).toBeTruthy();
        // expect(getAllByText(subtitle).length).toBe(2);
    });
});
