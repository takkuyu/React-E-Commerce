import React from 'react';
import { Link } from 'react-router-dom';


const NoMatchPage = () => (
  <div className="no_match_page">
    <h1>Oops ! The page cannot be found.</h1>
    <Link to="/" className='button' >GO BACK HOME</Link>
  </div>
);

export default NoMatchPage;