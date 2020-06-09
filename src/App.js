import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/routes/routes';
import ScrollToTop from './components/scrollToTop.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  state = {
    isLoading: true
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // remain open until this component does unmount.

      if (userAuth) {// if user is signined already.
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, // snapShot.data() doesn't include user's id so declare it here
            ...snapShot.data() // then takes everything else in the returned data
          })
          this.setState({ isLoading: false });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription when unmount.
  }

  render() {
    const isLoggedin = (this.props.currentUser ? true : false)

    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Header isLoggedin={isLoggedin} />
          <Route render={props => <Routes {...props} currentUser={this.props.currentUser} isLoading={this.state.isLoading} />} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);