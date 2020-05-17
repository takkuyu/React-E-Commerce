import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component';
import CheckoutPage from '../../pages/checkout/checkoutpage.component';
import AccountPage from '../../pages/account/accountpage.component';
import LoginPage from '../../pages/login/loginpage.component';
import NoMatchPage from '../../pages/404page/404page.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Collection from '../../pages/collection/collection.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from '../../firebase/firebase.utils';

class Routes extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: {
  //       id: '',
  //       displayName: '',
  //       email: '',
  //       createdAt: 0,
  //       purchasedItems: []
  //     },
  //     itemCounter: 0,
  //     cartModal: false
  //   }
  //   // this.updateCartCounter = this.updateCartCounter.bind(this);
  //   // this.toggleCartModal = this.toggleCartModal.bind(this);
  // }

  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   // console.log('routes')

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // remain open until this component does unmount.

  //     if (userAuth) {// if user is signined already.
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data() // snapShot.data() doesn't include user's id 
  //           }
  //         }, () => { console.log(this.state.currentUser) });
  //       });
  //       // addCollectionAndDocuments('collections', SHOP_DATA.map(({ title, items }) => ({ title, items })))
  //     }
  //     else {

  //       const initialUserState = {
  //         id: '',
  //         displayName: '',
  //         email: '',
  //         createdAt: 0,
  //         purchasedItems: []
  //       }

  //       this.setState({
  //         currentUser: initialUserState
  //       }, () => { console.log(this.state.currentUser) });
  //     }
  //   });

  //   const itemCount = (JSON.parse(sessionStorage.getItem('cart')) !== null ? JSON.parse(sessionStorage.getItem('cart')).length : 0);
  //   this.setState({ itemCounter: itemCount })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth(); // close the subscription when unmount.
  // }

  // updateCartCounter(len) {
  //   this.setState({
  //     itemCounter: len
  //   })
  // }

  // toggleCartModal() {
  //   this.setState({
  //     cartModal: !this.state.cartModal
  //   })
  // }

  render() {
    // const categoryOptions = "sneakers|running|boots|topsellers|new";
    // const genderOptions = "mens|women";
    console.log('routes')
    return (
      <section>
        {/* <Header
          currentUser={this.state.currentUser}
          itemCounter={this.state.itemCounter}
          cartModal={this.state.cartModal}
          toggleCartModal={this.toggleCartModal}
          updateCartCounter={this.updateCartCounter}
        /> */}
        <Switch key={this.props.location.key}>
          <Route path='/' exact component={HomePage} />
          <Route path={`/collections`} component={Collection} />
          <Route path="/account/login" exact render={() => this.state.currentUser.id === '' ?
            <LoginPage /> : <AccountPage currentUser={this.state.currentUser} />} />
          <Route path="/account" exact render={props => <AccountPage {...props} currentUser={this.state.currentUser} />} />
          <Route path="/checkout" exact render={props => <CheckoutPage {...props} updateCartCounter={this.updateCartCounter} currentUserId={this.state.currentUser.id} />} />
          <Route component={NoMatchPage} />{/* fall back page  */}
        </Switch>
        {/* <Footer /> */}
      </section >
    );
  }
};

export default Routes;