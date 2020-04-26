import React from 'react';
// import LandingMain from './components/landingpage/landingmain.component';
// import Header from './components/header/header.component';
// import Footer from './components/footer/footer.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/routes/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Routes} />
      </Router>
    </div>
  );
}

export default App;
