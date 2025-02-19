import React, { useState } from "react";
import { StoreContext } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
const App = () => {
  const [user, setuser] = useState({});

  const isUserLogin = () => {
    return Object.keys(user).length > 0;
  };
  return (
    <StoreContext.Provider value={{ user, setuser, isUserLogin }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};
export default App;
