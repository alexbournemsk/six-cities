import React, {useState} from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";


export const OfferList = (props) => {
  const {offers} = props;
  const [activeCard, setActiveCard] = useState(0);
  const handleMouseMove = (item) => {
    console.log(item);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => {
        return (
          <OfferCard
            key={card.id}
            offer={card}
            handleMouseMove = {handleMouseMove}
          />
        );
      })}

    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};
