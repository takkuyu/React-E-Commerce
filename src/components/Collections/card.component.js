import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import { selectCategory } from '../../redux/shop/shop.selectors'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Card = ({ id, name, imageUrl, price, routeName, history, match, category }) => (
  <Col md='6' lg='4'>
    <div className='collections-card' onClick={() => history.push((category ? `${match.url}/${id}` : `${match.url}/${routeName}/${id}`))}>
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

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
});

export default compose(
  connect(mapStateToProps),
  withRouter
)(Card);
