import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";


export const OfferList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => {
        return (
          <OfferCard
            key={card.id}
            offer={card}
          />
        );
      })}
    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};
