import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import View from './View/index'
import store from './store/index'

import registerServiceWorker from './registerServiceWorker';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={View}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
