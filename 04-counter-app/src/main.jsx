import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './FirstApp';
import { CounterApp } from './CounterApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App title="Mi titulo" subtitle={ 123 } /> */}
        <CounterApp initialValue={ 0 } />
    </React.StrictMode>
);
