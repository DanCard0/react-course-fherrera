import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('Generado nuevamente');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
