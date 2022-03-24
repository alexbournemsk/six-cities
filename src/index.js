import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {OfferCards} from "./mocks/offers";

ReactDOM.render(
    <App
      offers = {OfferCards}/>,
    document.querySelector(`#root`)
);
