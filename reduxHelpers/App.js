import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';
import { createRootNavigator } from './src/routers/index';

export default class App extends Component {
    render() {
        const Layout = createRootNavigator();
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout />
                </PersistGate>
            </Provider>
        );
    }
}
