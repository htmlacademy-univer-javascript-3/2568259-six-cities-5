<<<<<<< HEAD
import { useState } from 'react';
import { OfferEntity } from '@/types/offer/offer';
import OfferCard from '@/components/offer-card/offer-card';
import classNames from 'classnames';

type OffersListProps = {
  offers: OfferEntity[];
  type: 'Main' | 'Nearby';
};

function OffersList({ offers, type }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  let containerClassName: string;

  switch (type) {
    case 'Main':
      containerClassName = 'cities__places-list tabs__content';
      break;
    case 'Nearby':
      containerClassName = 'near-places__list';
      break;
  }

  return (
    <div className={classNames(containerClassName, 'places__list')} >
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onMouseOver={() => {
            setActiveOfferId(offer.id);
          }}
          onMouseLeave={() => {
            setActiveOfferId(null);
          }}
          type={type}
        />
      ))}
    </div>
  );
}

=======
import React from "react";

import {CardType} from "../const";
import {Offer} from "../types";

import OffersItem from "../offers-item/offers-item";

type Props = {
  offers: Offer[];
  type: CardType;
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, type} = props;
  // eslint-disable-next-line
  const [activeID, setActiveID] = React.useState(null);

  return (
    <React.Fragment>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
          onMouseEnter={() => setActiveID(offer.id)}
          onMouseLeave={() => setActiveID(null)}
        />
      )}
    </React.Fragment>
  );
};

>>>>>>> aa66e539227ce17a7e472bc059e2265a24b74c48
export default OffersList;
