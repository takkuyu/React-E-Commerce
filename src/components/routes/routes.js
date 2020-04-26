import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Collections from "./Collections/collections.routes";
// import Pages from "./Pages/pages.routes";
// import SignInAndSignUpPage from "./Pages/pages.routes";
import CollectionPage from "../Collections/collection.component";
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import LandingMain from '../../components/landingpage/landingmain.component';

const Routes = () => {

  return (
    <section style={{ marginTop: '5rem' }}>
      <Header />
      <Switch>
        {/* <Route
          exact
          path='/signin'
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          }
        /> */}
        {/* <Route path="/collections" exact component={Collections} /> */}
        <Route exact path='/' component={LandingMain} />

        <Route path="/collections/mens" exact component={CollectionPage} />
        {/* <Route path="/pages" exact component={Pages} /> */}

      </Switch>
      <Footer />
    </section>
  );
};

export default Routes;