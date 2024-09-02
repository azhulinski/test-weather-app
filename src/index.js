import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from './store/store';
import Weather from "./components/Weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Weather/>
        </Provider>
    </BrowserRouter>
);