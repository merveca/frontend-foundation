import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Header from "./components/shared/Header";
import HomePage from "./pages/HomePage";
import BirthdayPage from "./pages/BirthdayPage";
import BoostrapClassicPage from "./pages/BoostrapClassicPage";
import ClockPage from "./pages/ClockPage";
import CompPage from "./pages/CompPage";
import CounterPage from "./pages/CounterPage";
import CountriesPage from "./pages/CountriesPage";
import Form1Page from "./pages/Form1Page";
import Form2Page from "./pages/Form2Page";
import Form3Page from "./pages/Form3Page";
import Form4Page from "./pages/Form4Page";
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";
import RandomImagesPage from "./pages/RandomImagesPage";
import ShopPage from "./pages/ShopPage";
import StatePage from "./pages/StatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UserCardsPage from "./pages/UserCardsPage";
import ToDoAppPage from "./pages/ToDoAppPage";
import ExchangePage from "./pages/ExchangePage";
import { StoreContext } from "./store";
import axios from "axios";
function App() {
  const [kurlar, setKurlar] = useState({});
  useEffect(() => {
    axios("https://api.frankfurter.app/latest?from=try").then((resp) => {
      console.log(resp.data);
      setKurlar(resp.data.rates);
    });
  }, []);
  return (
    <StoreContext.Provider value={{ kurlar }}>
      <Router>
        <Header />
        <Container className="mb-5">
          <Row>
            <Col md={3}>
              <Menu />
            </Col>
            <Col md={9} className="p-4">
              <Switch>
                <Route path="/exchange">
                  <ExchangePage />
                </Route>
                <Route path="/todoapp">
                  <ToDoAppPage />
                </Route>
                <Route path="/usercards">
                  <UserCardsPage />
                </Route>
                <Route path="/useeffect">
                  <UseEffectPage />
                </Route>
                <Route path="/state">
                  <StatePage />
                </Route>
                <Route path="/shop">
                  <ShopPage />
                </Route>
                <Route path="/random-images">
                  <RandomImagesPage />
                </Route>
                <Route path="/progress">
                  <ProgressPage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/posts">
                  <PostsPage />
                </Route>
                <Route path="/form4">
                  <Form4Page />
                </Route>
                <Route path="/form3">
                  <Form3Page />
                </Route>
                <Route path="/form2">
                  <Form2Page />
                </Route>
                <Route path="/form1">
                  <Form1Page />
                </Route>
                <Route path="/countries">
                  <CountriesPage />
                </Route>
                <Route path="/counter">
                  <CounterPage />
                </Route>
                <Route path="/comp">
                  <CompPage />
                </Route>
                <Route path="/clock">
                  <ClockPage />
                </Route>
                <Route path="/bs-classic">
                  <BoostrapClassicPage />
                </Route>
                <Route path="/birthday">
                  <BirthdayPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </StoreContext.Provider>
  );
}
export default App;
