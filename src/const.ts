<<<<<<< HEAD
export enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Setting = {
  PlacesCount: 32,
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const URL_PIN =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_PIN_ACTIVE =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
=======
export const LocationPlaces = [{name:'Paris', active: false}, {name:'Cologne', active: false}, {name:'Brussels', active: false}, {name:'Amsterdam', active: true}, {name:'Hamburg', active: false}, {name:'Dusseldorf', active: false}];


export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorite = '/favorite',
    Offer = '/offer/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',

}
>>>>>>> 0d0d908030ab462e0b97ee1a35ab87f3114e7010
