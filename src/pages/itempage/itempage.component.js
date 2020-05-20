import React from 'react';
import SHOP_DATA from '../../collection-items'
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleCartHidden, addItem } from '../../redux/cart/cart.actions';


class ItemPage extends React.Component {
  state = {
    itemSize: 0,
  }

  getItemData({ gender, category, id }) {

    switch (category) {
      case 'sneakers': {
        const itemData = SHOP_DATA[1].items.filter(item => item.id === Number(id))[0]
        const pmin = itemData.price - 50;
        const pmax = itemData.price + 50;
        const recommendations = SHOP_DATA[1].items.filter(item => item.item_gender === gender && item.id !== Number(id) && item.price <= pmax && item.price >= pmin)

        return { itemData, recommendations };
      }
      case 'running': {
        const itemData = SHOP_DATA[0].items.filter(item => item.id === Number(id))[0]
        const pmin = itemData.price - 50;
        const pmax = itemData.price + 50;
        const recommendations = SHOP_DATA[0].items.filter(item => item.item_gender === gender && item.id !== Number(id) && item.price <= pmax && item.price >= pmin)

        return { itemData, recommendations };
      }
      case 'boots': {
        const itemData = SHOP_DATA[2].items.filter(item => item.id === Number(id))[0]
        const pmin = itemData.price - 50;
        const pmax = itemData.price + 50;
        const recommendations = SHOP_DATA[2].items.filter(item => item.item_gender === gender && item.id !== Number(id) && item.price <= pmax && item.price >= pmin)

        return { itemData, recommendations };
      }
      case 'topsellers': {
        const itemData = SHOP_DATA[3].items.filter(item => item.id === Number(id))[0]
        const pmin = itemData.price - 50;
        const pmax = itemData.price + 50;
        const recommendations = SHOP_DATA[3].items.filter(item => item.item_gender === gender && item.id !== Number(id) && item.price <= pmax && item.price >= pmin)

        return { itemData, recommendations };
      }
      case 'new': {
        const itemData = SHOP_DATA[4].items.filter(item => item.id === Number(id))[0]
        const pmin = itemData.price - 50;
        const pmax = itemData.price + 50;
        const recommendations = SHOP_DATA[4].items.filter(item => item.item_gender === gender && item.id !== Number(id) && item.price <= pmax && item.price >= pmin)

        return { itemData, recommendations };
      }
      default:
        return
    }
  }

  getColor(name) {
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
    const { itemData, recommendations } = this.getItemData(this.props.match.params);
    const { name, imageUrl, price, size, color } = itemData;
    const { toggleCartHidden, addItem, addItemSize, itemSize } = this.props;

    const sizeList = size.map(size => (
      <li key={size} className={`${this.state.itemSize === size ? "selected" : ""}`} onClick={() => { this.setState({ itemSize: size }) }}>{size}</li>
    ));

    const btn = (this.state.itemSize ?
      <p className='button selected' style={{ cursor: 'pointer' }} onClick={() => {
        addItem(itemData, this.state.itemSize)
        toggleCartHidden()
      }} >ADD TO CART</p>
      :
      <p className='button'>SELECT A SIZE</p>);

    return (
      <div className='itempage-container' style={{ marginTop: '5rem' }}>
        <Container>

          <div className='itempage-top-wrapper'>
            <img src={imageUrl} alt='item-img' />
            <div className='top-content'>
              <h1>{name}</h1>
              <p className='big'>${price} CAD</p>
              <p className='bold'>COLOR: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
              <p className='color' style={{ background: this.getColor(color) }}></p>
              <p className='bold' style={{ margin: 0 }}>SELECT SIZE:</p>
              <ul className='size-list'>
                {sizeList}
              </ul>
              {btn}
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
                recommendations.map(item => {
                  return (
                    <div className='item-card' key={item.id} onClick={() => { this.props.history.push(`/shop/${this.props.match.params.gender}/${this.props.match.params.category}/${item.id}`) }}>
                      <img src={item.imageUrl} alt='' />
                      <div className='card-content'>
                        <h2>{item.name}</h2>
                        <p>Lorem plus</p>
                        <p style={{ margin: 0 }}>$ {item.price} CAD</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Container>
      </div>
    );
  }

};


const mapDispatchToProps = dispatch => ({
  addItem: (item, size) => dispatch(addItem(item, size)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  null,
  mapDispatchToProps
)(ItemPage);