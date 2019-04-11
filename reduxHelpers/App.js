import React, {Component} from 'react';
import { Provider }                     from 'react-redux';
import { PersistGate }                  from 'redux-persist/integration/react';
import { persistor, store }             from './src/store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout />
          </PersistGate>
        </Provider>
    );
  }
}