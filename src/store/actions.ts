<<<<<<< HEAD
import { createAction } from '@reduxjs/toolkit';
import { City } from '@/types/city/city';
import { OfferEntity } from '@/types/offer/offer';

export const Actions = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS',
};

export const setCity = createAction<City>(Actions.SET_CITY);

export const setOffers = createAction<OfferEntity[]>(Actions.SET_OFFERS);
=======
import {ActionType} from "./const";
import {Action} from "./types";
import {Offer} from "../components/types";

export const ActionCreator = {
  getCurrentFilter: (currentFilter: string): Action => ({
    type: ActionType.GET_CURRENT_FILTER,
    payload: currentFilter
  }),
  getOffers: (offers: Offer[]): Action => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};
>>>>>>> aa66e539227ce17a7e472bc059e2265a24b74c48
