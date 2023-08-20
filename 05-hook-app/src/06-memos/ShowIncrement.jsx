import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('renderizado nuevamente');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
});
