import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Provider } from 'react-redux';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}> 
    <Provider store={store}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </Provider>
  </ThirdwebProvider> 
)