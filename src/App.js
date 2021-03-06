import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from "./router/ScrollToTop";
import PopularPage from "./views/PopularPage";
import ArtistLandingPage from "./views/ArtistLandingPage";
import MovieLandingPage from "./views/MovieLandingPage";
import SearchResultPage from "./views/SearchResultPage";
import TrendingPage from "./views/TrendingPage";
import NotFoundPage from "./views/NotFoundPage";
import Navbar from "./components/NavbarComponent";
import store from "./store";

const hist = createBrowserHistory();

class App extends Component {
  sum = (a, b) => {
    return a + b;
  };

  render() {
    console.log(this.sum(1, 2));

    return (
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <ScrollToTop>
              <Navbar />
              <Route exact path="/" component={PopularPage} />
              <Route exact path="/popular" component={PopularPage} />
              <Route exact path="/trending" component={TrendingPage} />
              <Route
                exact
                path="/search-result/:searchText"
                component={SearchResultPage}
              />
              <Route
                exact
                path="/movie/:movieID"
                component={MovieLandingPage}
              />
              <Route
                exact
                path="/actor/:actorID/:creditID"
                component={ArtistLandingPage}
              />
            </ScrollToTop>

            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
