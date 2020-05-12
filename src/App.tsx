import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/globals';
import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
    <ToastContainer autoClose={3000} />
    <GlobalStyle />
  </>
);

export default App;
