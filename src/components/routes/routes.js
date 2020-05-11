import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CollectionPage from "../collections/collection-page.component";
import ItemPage from "../collections/collection-item.component";
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import LandingMain from '../../components/landingpage/landingmain.component';
import Login from '../../components/login/loginpage.component';
import CheckoutPage from '../../components/checkout/checkoutpage.component';
import AccountPage from '../../components/login/accountpage.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id:'',
        displayName:'',
        email:'',
        createdAt: 0,
        purchasedItems:[]
      },
      itemCounter: 0,
      cartModal: false
    }
    this.updateCartCounter = this.updateCartCounter.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);
    // console.log('parent constructor')

  }

  unsubscribeFromAuth = null; //@note a variable can be defined outside a method like a global var

  componentDidMount() {
    // console.log('parent didmount')

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // remain open until this component does unmount.
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() // snapShot.data() doesn't include user's id 
            }
          }, () => { console.log(this.state.currentUser) });

        });
      }
      else {
        this.setState({ currentUser: userAuth }, () => { console.log(this.state.currentUser) });
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
    // console.log('parent render')

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
          <Route path='/' exact component={LandingMain} />
          <Route path="/collections/:gender" exact component={CollectionPage} />
          <Route path="/collections/:gender/:category" exact component={CollectionPage} />
          <Route path="/collections/:gender/:category/:id" exact render={props => <ItemPage {...props} updateCartCounter={this.updateCartCounter} toggleCartModal={this.toggleCartModal} />} />
          <Route path="/account/login" exact component={Login} />
          <Route path="/account" exact  render={props => <AccountPage {...props} currentUser={this.state.currentUser} />} />
          <Route path="/checkout" exact render={props => <CheckoutPage {...props} updateCartCounter={this.updateCartCounter} currentUserId={this.state.currentUser.id} />} />
        </Switch>
        <Footer />
      </section >
    );
  }
};

export default Routes;