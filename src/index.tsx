import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from '@/components/app/app';
import { offers as mockOffers } from '@/mocks/offers';
=======
import App from './components/app/app';
import { places } from './mocks/offers';
>>>>>>> 0d0d908030ab462e0b97ee1a35ab87f3114e7010

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App offers={mockOffers} />
=======
    <App places={places}/>
>>>>>>> 0d0d908030ab462e0b97ee1a35ab87f3114e7010
  </React.StrictMode>
);
