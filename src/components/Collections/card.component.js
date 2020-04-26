import React from 'react';
import { withRouter } from 'react-router-dom';

const Card = (props) => {

  console.log(props)
  return (
    <div className='collections-card'>
      <div className='collections-card-outer'>
        <img src='https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1317&q=80' />
        <div className='card-content'>
          <h2>Mens Wool Runners</h2>
          <p>Natural Black</p>
          <p>$ 135 CAD</p>
        </div>
      </div>
      <div className='quick-add'>
        <p>Quick Add <i className="fas fa-plus"></i></p>
      </div>
    </div>
  );
};

export default withRouter(Card);