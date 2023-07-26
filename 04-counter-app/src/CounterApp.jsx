import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({initialValue}) => {
    const [counter, setCounter] = useState(initialValue);
    
    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(initialValue);

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    initialValue: PropTypes.number.isRequired
}
