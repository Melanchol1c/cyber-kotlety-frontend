import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import AppRouter from './router';
import DashboardLayout from './app/layouts/DashboaedLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <AppRouter />
      </DashboardLayout>
    </BrowserRouter>
  );
};

export default App;
