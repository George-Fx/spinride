import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App.tsx';

import './scss/_index.scss';
import {BrowserRouter} from 'react-router-dom';

import {store} from './store';
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
