import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import router from './router'

function App() {
  return (
    // <Provider store={store}>
    <HashRouter>
      <div>
        {router}
      </div>
    </HashRouter>
    // </Provider>
  );
}

export default App;
