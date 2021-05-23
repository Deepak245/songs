// third Party imports
// *********Named exports


import {Provider} from 'react-redux';
import {createStore} from 'redux';
//

// ********un named Exports


import React from "react";
import ReactDOM from 'react-dom';
//

// our own created imports
import App from './components/App';
import reducers from './reducers';
//



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);