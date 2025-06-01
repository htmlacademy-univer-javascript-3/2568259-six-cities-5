import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '@/const';
import PrivateRoute from '@/components/private/private-route';
import LoginPage from '@/pages/login/login-page';
import MainPage from '@/pages/main/main-page';
import OfferPage from '@/pages/offer/offer-page';
import FavoritesPage from '@/pages/favorites/favorites-page';
import NotFoundPage from '@/pages/not-found/not-found-page';
import { Offers } from '@/types/offer';

type AppProps = {
  offers: Offers;
}

export default function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage offers={offers}/>}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
=======
import Main from '../../pages/main/main';
import { ListProps } from '../main/list-places/list-places';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../common/private-route/private-route';


function App({places}: ListProps): JSX.Element {
  const favoriteplaces = places.filter((place) => place.isFavorite);
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<Main places = {places}/>}
        />
        <Route
          path= {AppRoute.Login}
          element = {<Login/>}
        />
        <Route
          path= {AppRoute.Favorite}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites places = {favoriteplaces}/>
            </PrivateRoute>
          }
        />
        <Route
          path= {AppRoute.Offer}
          element = {<Offer/>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
>>>>>>> 0d0d908030ab462e0b97ee1a35ab87f3114e7010
