import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';
// import PropTypes from 'prop-types';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Greeting message="Behnam" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
