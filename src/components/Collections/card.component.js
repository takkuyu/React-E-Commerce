import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import { selectCategory } from '../../redux/shop/shop.selectors'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';

class Card extends React.Component {
  state = {
    isQuickMenuOpen: false
  }

  render() {
    const { item, routeName, history, match, category, addItem, toggleCartHidden } = this.props;
    const { id, name, imageUrl, price, size, } = item;

    return (
      <Col md='6' lg='4'>
        <div className='collections-card' >
          <div className='collections-card-outer' onClick={() => history.push((category ? `${match.url}/${id}` : `${match.url}/${routeName}/${id}`))}>
            <img src={imageUrl} alt='product img' />
            <div className='card-content'>
              <h3>{name}</h3>
              <p>Lorem plus</p>
              <p>$ {price} CAD</p>
            </div>
          </div>
          <div className='quick-add'>
            <p onClick={() => this.setState({ isQuickMenuOpen: !this.state.isQuickMenuOpen })}>
              Quick Add
            <i className={`fas ${this.state.isQuickMenuOpen ? "fa-chevron-up" : "fa-plus"}`}></i></p>
          </div>

          <div className={`search-filter-content ${this.state.isQuickMenuOpen ? "active" : ""}`}>
            <ul className="search-filter-size" >
              {
                size.map((thisSize, index) => <li key={index} onClick={() => {
                  addItem(item, thisSize)
                  toggleCartHidden()
                }}>{thisSize}</li>)
              }
            </ul>
          </div>

        </div>
      </Col>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
});


const mapDispatchToProps = dispatch => ({
  addItem: (item, size) => dispatch(addItem(item, size)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Card);
