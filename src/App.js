import React from 'react';
// import LandingMain from './components/landingpage/landingmain.component';
// import Header from './components/header/header.component';
// import Footer from './components/footer/footer.component';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/routes/routes';
import ScrollToTop from './components/scrollToTop.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Route component={Routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
