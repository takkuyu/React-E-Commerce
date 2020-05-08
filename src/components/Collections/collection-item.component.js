import React from 'react';
import SHOP_DATA from '../../collection-items'
import { Container } from 'reactstrap';
import CartSlide from '../header/header-cartslide.component';

class ItemPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeSelect: 0,
      openCartModal: false
    }
    this.toggleCartModal = this.toggleCartModal.bind(this);
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

  checkDuplicates(id, size, items_arr) {

    const duplicate = items_arr.find(item => item.id === id && item.size === size);
    const index = items_arr.indexOf(duplicate)

    if (index !== -1) return index

    return -1
  }

  addItemToCart({ ...itemData }) { //@Note: use split to prevent overriding

    let items_arr = []
    let index = -1;
    itemData.size = this.state.sizeSelect;

    if (sessionStorage.getItem('cart') !== null) { // When it is not the first time of adding an item.
      items_arr = JSON.parse(sessionStorage.getItem('cart'));
      index = this.checkDuplicates(itemData.id, itemData.size, items_arr);
    }

    if (index !== -1) {
      items_arr[index].amount = items_arr[index].amount + 1;
    } else {
      itemData.amount = 1;
      items_arr.push(itemData)
    }

    sessionStorage.setItem('cart', JSON.stringify(items_arr));
    this.setState({
      openCartModal: true
    })
  }

  toggleCartModal() {
    this.setState({
      openCartModal: !this.state.openCartModal
    })
  }

  render() {
    const { itemData, recommendations } = this.getItemData(this.props.match.params);
    // const { id, name, imageUrl, price, item_gender, size, color } = itemData;
    const { name, imageUrl, price, size, color } = itemData;
    // console.log(JSON.parse(sessionStorage.getItem('cart')))

    const sizeList = size.map(size => (
      <li key={size} className={`${this.state.sizeSelect === size ? "selected" : ""}`} onClick={() => { this.setState({ sizeSelect: size }) }}>{size}</li>
    ));

    const btn = (this.state.sizeSelect !== 0 ? <p className='button selected' style={{ cursor: 'pointer' }} onClick={() => this.addItemToCart(itemData)}>ADD TO CART</p> : <p className='button'>SELECT A SIZE</p>)
    const cartModal = (this.state.openCartModal ? <CartSlide toggleCartModal={this.toggleCartModal} /> : ''); // @Note: it reloads a constuctor since it will be loaded from scratch
    return (
      <div style={{ marginTop: '5rem' }}>
        <div className='itempage-container'>
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
                <p>On-trend, simple Scandinavian sneaker range on a buffed up cupsole - contemporary styling in exquisite materials.</p>
                <ul>
                  <li>Long-lace sneaker boot showcasing edgy, forward-thinking ECCO materials for a modern look</li>
                  <li>Full leather-lining for a rich, elegant look and feel, ensuring perfect inner climate</li>
                  <li>LRemovable, foot- sculptured leather-covered inlay sole with ECFS™ increased air circulation for a perfect inner climate</li>
                  <li>Long-lace sneaker boot showcasing edgy, forward-thinking ECCO materials for a modern look</li>
                  <li>Direct-injected PU/TPU outsole - light and flexible with a unique, youthful design trending a heavier cupsole</li>
                </ul>
              </div>
            </div>

            <div className='itempage-bottom-wrapper'>
              <h1>YOU MAY ALSO LIKE</h1>
              <div className='bottom-content'>
                {
                  recommendations.map(item => {
                    return (
                      <div className='item-card' key={item.id} onClick={() => { this.props.history.push(`/collections/${this.props.match.params.gender}/${this.props.match.params.category}/${item.id}`) }}>
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
        {cartModal}
      </div>
    );
  }

};

export default ItemPage;