import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducer from './reducers';
import RoutingComponent from './routes';
import thunk from 'redux-thunk';

const store = createStore(combineReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <RoutingComponent />
    </Provider>
  );
}

export default App;
