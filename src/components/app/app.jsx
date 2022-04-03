// 3.17.1 Не забудьте добавить с помощью пакета PropTypes валидацию props для App.
import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from "prop-types";

import {MainPage} from "../main-page/main";
import {LoginPage} from "../login-page/login-page";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {RoomPage} from "../room-page/room-page";
import {PageNotFound} from "../404-page/404-page";

export const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers = {offers}/>
        </Route>

        <Route path="/offer/:id" exact>
          <RoomPage
            offers = {offers}/>
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage offers = {offers}/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>

      </Switch>

    </BrowserRouter>
  );
};


App.propTypes = {
  offers: PropTypes.array.isRequired,
};
