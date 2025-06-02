import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetch, checkAuth} from './store/api-action';
import { ToastContainer } from 'react-toastify';


store.dispatch(checkAuth());
store.dispatch(fetch());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App/>
    </Provider>


  </React.StrictMode>
);
