<<<<<<< HEAD
import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';
import { store } from '.';

export type State = {
  city: City;
  offers: OfferEntity[];
};

export type AppDispatch = typeof store.dispatch
=======
import {ActionType} from "./const";
import {Offer} from "../components/types";

export type State = {
  currentFilter: string,
  offers: Offer[]
};

type getCurrentFilterAction = {
  type: typeof ActionType.GET_CURRENT_FILTER,
  payload: string
}

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type Action = getCurrentFilterAction | getOffersAction;
>>>>>>> aa66e539227ce17a7e472bc059e2265a24b74c48
