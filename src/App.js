import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/landing-page/header.component';
import LandingMain from './components/landing-page/landing-main.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingMain />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
