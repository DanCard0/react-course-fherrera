import PropTypes from 'prop-types'

const message = {
    name: 'Daniel',
    title: 'Engineer'
};

export const FirstApp = ({title, subtitle}) => {
    return (
        <>
            <h1>{title}</h1>
            <code>{JSON.stringify(message)}</code>
            <h2>Valor: {subtitle}</h2>
            <p>Soy un parrafo</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    // title: 'No hay título',
    subtitle: 0
}