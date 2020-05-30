import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';

const Card = ({ id, name, imageUrl, price, routeName, history, match }) => {
  console.log(typeof(id))

  const path = (routeName ? `${match.url}/${routeName}/${id}` : `${match.url}/${id}`);
  // const path = `${match.url}/${id}`;
  return (
    <Col md='6' lg='4'>
      <div className='collections-card' onClick={() => history.push({
        pathname: path,
        // state: { itemData: name }
      })}>
        <div className='collections-card-outer'>
          <img src={imageUrl} alt='' />
          <div className='card-content'>
            <h2>{name}</h2>
            <p>Lorem plus</p>
            <p>$ {price} CAD</p>
          </div>
        </div>
        <div className='quick-add'>
          <p>Quick Add <i className="fas fa-plus"></i></p>
        </div>
      </div>
    </Col>
  );
};

export default withRouter(Card);
