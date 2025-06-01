<<<<<<< HEAD
import { Offers, Offer } from '@/types/offer';
import PlaceCard from '@/components/cards/place-card';

type OffersListProps = {
    offers: Offers;
    // selectedOffer: Offer | null;
    setSelectedOffer: (offer: Offer | null) => void;
};


export default function CardsList(props: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => props.setSelectedOffer(offer)}
          onMouseLeave={() => props.setSelectedOffer(null)}
=======
import { Offers } from '@/types/offer';
import PlaceCard from '@/components/cards/place-card';
import { useState } from 'react';

type OffersListProps = {
    offers: Offers;
};


export default function CardsList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
>>>>>>> 0d0d908030ab462e0b97ee1a35ab87f3114e7010
        />))}
    </div>
  );
}
