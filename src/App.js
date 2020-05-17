import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/routes/routes';
import ScrollToTop from './components/scrollToTop.component'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {

  constructor() {
    super();
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
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // console.log('routes')

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
        // addCollectionAndDocuments('collections', SHOP_DATA.map(({ title, items }) => ({ title, items })))
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
    console.log(this.props)
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Header
            currentUser={this.state.currentUser}
            itemCounter={this.state.itemCounter}
            cartModal={this.state.cartModal}
            toggleCartModal={this.toggleCartModal}
            updateCartCounter={this.updateCartCounter}
          />
          <Route component={Routes} />
          <Footer />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
