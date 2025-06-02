export type OfferProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    }

export type OffersProps = OfferProps[];

export type OfferAllInfo = Omit<OfferProps, 'previewImage'> & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
            name: string;
            avatarUrl: string;
            isPro: boolean;
            };
    images: string[];
    maxAdults: number;
  }

export type Location = {

    latitude: number;
    longitude: number;
    zoom: number;

}

export type City = {
    name: string;
    location: Location;
}


