import React from 'react';
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
