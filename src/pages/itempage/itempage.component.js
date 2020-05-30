import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleCartHidden, addItem } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectItemAndRecommendations, selectGender, selectCategory } from '../../redux/shop/shop.selectors'

class ItemPage extends React.Component {
  state = {
    itemSize: undefined,
  }

  getColorCodeByName(name) {
    switch (name) {
      case 'black':
        return 'rgba(0,0,0,.8)';
      case 'white':
        return 'white';
      case 'brown':
        return '#802b00';
      case 'blue':
        return '#4d79ff';
      case 'red':
        return '#dc3545';
      case 'yellow':
        return '#ff0';
      case 'multi':
        return 'linear-gradient(90deg,#3023ae 0,#53a0fd 47.52%,#b4ec51 100%)';
      case 'green':
        return '#28a745';
      default:
        return 'white';
    }
  }

  render() {
    const { collectionItem, toggleCartHidden, addItem, category, gender, history } = this.props
    const { item, recommendations } = collectionItem;
    const { name, imageUrl, price, size, color } = item;

    console.log(this.props)

    return (
      <div className='itempage-container' style={{ marginTop: '5rem' }}>
        <Container>

          <div className='itempage-top-wrapper'>
            <img src={imageUrl} alt='item-img' />
            <div className='top-content'>
              <h1>{name}</h1>
              <p className='big'>${price} CAD</p>
              <p className='bold'>COLOR: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
              <p className='color' style={{ background: this.getColorCodeByName(color) }}></p>
              <p className='bold' style={{ margin: 0 }}>SELECT SIZE:</p>
              <ul className='size-list'>
                {
                  size.map(size =>
                    <li key={size} className={`${this.state.itemSize === size ? "selected" : ""}`} onClick={() => { this.setState({ itemSize: size }) }}>{size}</li>)
                }
              </ul>
              {
                this.state.itemSize ?
                  <p className='button selected' style={{ cursor: 'pointer' }} onClick={() => {
                    addItem(item, this.state.itemSize)
                    toggleCartHidden()
                  }} >ADD TO CART</p>
                  :
                  <p className='button'>SELECT A SIZE</p>
              }
              <p>Free shipping &amp; 30-day returns, no questions asked</p>
            </div>
          </div>

          <div className='itempage-center-wrapper'>
            <div className='center-content'>
              <h1>PRODUCT DETAILS</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
              <ul>
                <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </li>
                <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet purus sed orci tincidunt tincidunt. Maecenas vestibulum, ex ac dictum.</li>
                <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</li>
              </ul>
            </div>
          </div>

          <div className='itempage-bottom-wrapper'>
            <h1>YOU MAY ALSO LIKE</h1>
            <div className='bottom-content'>
              {
                recommendations.map(item => (
                  <div className='item-card' key={item.id} onClick={() => { history.push(`/shop/${gender}/${category}/${item.id}`) }}>
                    <img src={item.imageUrl} alt='card image' />
                    <div className='card-content'>
                      <h2>{item.name}</h2>
                      <p>Lorem plus</p>
                      <p style={{ margin: 0 }}>$ {item.price} CAD</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collectionItem: selectItemAndRecommendations(ownProps.match.params.id),
  category: selectCategory,
  gender: selectGender,
});

const mapDispatchToProps = dispatch => ({
  addItem: (item, size) => dispatch(addItem(item, size)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);