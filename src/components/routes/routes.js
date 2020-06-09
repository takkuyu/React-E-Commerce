import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component';
import CheckoutPage from '../../pages/checkout/checkoutpage.component';
import AccountPage from '../../pages/account/accountpage.component';
import LoginPage from '../../pages/login/loginpage.component';
import ShopPage from '../../pages/shop/shop.component';
import NoMatchPage from '../../pages/404page/404page.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const AccountPageWithSpinner = WithSpinner(AccountPage);

const Routes = (props) => {

  const { currentUser, isLoading } = props;
  const genderOptions = "mens|women";

  return (
    <main className="main-container">
      <Switch >
        <Route path='/' exact component={HomePage} />
        <Route path={`/shop/:gender(${genderOptions})/:category?`} key={props.location.key} component={ShopPage} />
        <Route path="/account/login" exact render={(props) => currentUser ? <AccountPage {...props} currentUser={currentUser} /> : <LoginPage {...props} />} />
        <Route path="/account" exact render={props => currentUser ? <AccountPageWithSpinner {...props} isLoading={isLoading} currentUser={currentUser} /> : <LoginPage {...props} />} />
        <Route path="/checkout" exact render={props => <CheckoutPage {...props} />} />
        <Route component={NoMatchPage} />{/* fall back page  */}
      </Switch>
    </main >
  );
};

export default Routes;