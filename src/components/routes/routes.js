import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CollectionPage from "../collections/collection-page.component";
import ItemPage from "../collections/collecrion-item.component";
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import LandingMain from '../../components/landingpage/landingmain.component';
import Login from '../../components/login/loginpage.component';

const Routes = (props) => {
  return (
    <section>
      <Header />
      <Switch key={props.location.key}>
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
        <Route path='/' exact component={LandingMain} />
        <Route path="/collections/:gender" exact component={CollectionPage} />
        <Route path="/collections/:gender/:category" exact component={CollectionPage} />
        <Route path="/collections/:gender/:category/:id" exact component={ItemPage} />
        <Route path="/account/login" exact component={Login} />
      </Switch>
      <Footer />
    </section>
  );
};

export default Routes;