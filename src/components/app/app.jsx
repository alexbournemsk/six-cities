import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';


import {MainPage} from "../main-page/main";
import {LoginPage} from "../login-page/login-page";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {RoomPage} from "../room-page/room-page";
import {PageNotFound} from "../404-page/404-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/offer">
          <RoomPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>

      </Switch>

    </BrowserRouter>
  );
};
