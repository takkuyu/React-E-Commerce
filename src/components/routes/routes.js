import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.component';
import CollectionPage from "../../pages/collection/collectionpage.component";
import CheckoutPage from '../../pages/checkout/checkoutpage.component';
import AccountPage from '../../pages/account/accountpage.component';
import ItemPage from "../../pages/itempage/itempage.component";
import LoginPage from '../../pages/login/loginpage.component';
import NoMatchPage from '../../pages/404page/404page.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from '../../firebase/firebase.utils';
import SHOP_DATA from '../../collection-items';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: '',
        displayName: '',
        email: '',
        createdAt: 0,
        purchasedItems: []
      },
      itemCounter: 0,
      cartModal: false
    }
    this.updateCartCounter = this.updateCartCounter.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('routes')

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // remain open until this component does unmount.

      if (userAuth) {// if user is signined already.
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() // snapShot.data() doesn't include user's id 
            }
          }, () => { console.log(this.state.currentUser) });
        });
        console.log(SHOP_DATA[0].items)
        // addCollectionAndDocuments('collections', SHOP_DATA)
      }
      else {

        const initialUserState = {
          id: '',
          displayName: '',
          email: '',
          createdAt: 0,
          purchasedItems: []
        }

        this.setState({
          currentUser: initialUserState
        }, () => { console.log(this.state.currentUser) });
      }
    });

    const itemCount = (JSON.parse(sessionStorage.getItem('cart')) !== null ? JSON.parse(sessionStorage.getItem('cart')).length : 0);
    this.setState({ itemCounter: itemCount })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription when unmount.
  }

  updateCartCounter(len) {
    this.setState({
      itemCounter: len
    })
  }

  toggleCartModal() {
    this.setState({
      cartModal: !this.state.cartModal
    })
  }

  render() {
    const categoryOptions = "sneakers|running|boots|topsellers|new";
    const genderOptions = "mens|women";

    return (
      <section>
        <Header
          currentUser={this.state.currentUser}
          itemCounter={this.state.itemCounter}
          cartModal={this.state.cartModal}
          toggleCartModal={this.toggleCartModal}
          updateCartCounter={this.updateCartCounter}
        />
        <Switch key={this.props.location.key}>
          <Route path='/' exact component={HomePage} />
          <Route path={`/collections/:gender(${genderOptions})/:category(${categoryOptions})?`} exact component={CollectionPage} />
          <Route path={`/collections/:gender(${genderOptions})/:category(${categoryOptions})/:id(\\d+)`} exact render={
            props => <ItemPage {...props} updateCartCounter={this.updateCartCounter} toggleCartModal={this.toggleCartModal} />
          } />
          <Route path="/account/login" exact component={LoginPage} />
          <Route path="/account" exact render={props => <AccountPage {...props} currentUser={this.state.currentUser} />} />
          <Route path="/checkout" exact render={props => <CheckoutPage {...props} updateCartCounter={this.updateCartCounter} currentUserId={this.state.currentUser.id} />} />
          <Route component={NoMatchPage} />{/* fall back page  */}
        </Switch>
        <Footer />
      </section >
    );
  }
};

export default Routes;