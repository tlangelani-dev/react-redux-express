import React, { Component } from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import  {createStore} from 'redux';
import counterApp from './../reducers';

let store = createStore(counterApp);

class App extends Component {
    render() {
        return (
            <div className="component-app">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit tenetur accusamus ea.</p>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
        );
    }
}

export default App;
