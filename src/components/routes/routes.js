import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CollectionPage from "../collections/collection-page.component";
import ItemPage from "../collections/collection-item.component";
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import LandingMain from '../../components/landingpage/landingmain.component';
import Login from '../../components/login/loginpage.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; //@note a variable can be defined outside a method like a global var

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // remain open until this component does unmount.
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },  () => {console.log(this.state)});

        });
      }
      else {
        this.setState({ currentUser: userAuth }, () => {console.log(this.state)});
      }
    });

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });

    //   console.log(user);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription when unmount.
  }

  render() {

    return (
      <section>
        <Header currentUser={this.state.currentUser} />
        <Switch key={this.props.location.key}>
          <Route path='/' exact component={LandingMain} />
          <Route path="/collections/:gender" exact component={CollectionPage} />
          <Route path="/collections/:gender/:category" exact component={CollectionPage} />
          <Route path="/collections/:gender/:category/:id" exact component={ItemPage} />
          <Route path="/account/login" exact component={Login} />
        </Switch>
        <Footer />
      </section >
    );
  }
};

export default Routes;