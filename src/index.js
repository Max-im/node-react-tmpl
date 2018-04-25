import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import App from './components/App/App';

ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
);