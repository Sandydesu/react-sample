import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducer from './reducers';
import RoutingComponent from './routes';
const store = createStore(combineReducer);
function App() {
  return (
    <Provider store={store}>
      <RoutingComponent />
    </Provider>
  );
}

export default App;
