import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index.routes';
import { AuthProvider } from './context/auth';
import GlobalStyles from './global/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
