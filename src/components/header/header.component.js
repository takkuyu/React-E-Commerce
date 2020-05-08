import React from 'react';
import HeaderModal from './header-modal.component';
// import { CSSTransition } from 'react-transition-group';
import logo from '../../img/takaya-logo.png';
import { Link } from 'react-router-dom';
import CartSlide from './header-cartslide.component';
import { auth } from '../../firebase/firebase.utils';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      gender: '',
      cartModal: false
    }
    this.displayModal = this.displayModal.bind(this); // @Note: needed for setState
    this.hideModal = this.hideModal.bind(this); // @Note: needed for setState
    this.toggleCartModal = this.toggleCartModal.bind(this); // @Note: needed for setState
    // console.log(this.props.currentUser)
  }


  displayModal(gender) {

    if (this.state.gender !== gender && this.state.modal) {
      this.setState({
        modal: true,
        gender: gender
      })
      return
    }

    if (this.state.gender === gender && this.state.modal) {
      this.hideModal()
      return
    }

    this.setState({
      modal: !this.state.modal,
      gender: gender
    })
  }

  hideModal() {
    this.setState({
      modal: false,
      gender: ''
    })
  }

  toggleCartModal() {
    this.setState({
      cartModal: !this.state.cartModal
    })
  }

  render() {
    // console.log(this.props.currentUser)

    const itemCount = JSON.parse(sessionStorage.getItem('cart')).length;
    console.log(itemCount)

    const modal = (
      this.state.modal ?
        <HeaderModal
          hideModal={this.hideModal}
          gender={this.state.gender}
        />
        :
        '')

    const modal_icon = (this.state.modal ?
      <i id='bars' className="fas fa-times" onClick={() => { this.setState({ modal: !this.state.modal }) }} ></i>
      :
      <i id='bars' className="fas fa-bars" onClick={() => { this.setState({ modal: !this.state.modal }) }}></i>)


    const cartSlide = (this.state.cartModal ? <CartSlide toggleCartModal={this.toggleCartModal} /> : '');

    return (
      <header className="landing-header">
        {modal_icon}
        <ul className='header-left'>
          <li className={`${this.state.gender === 'Men' ? "is-active" : "inactive"}`} onClick={() => { this.displayModal('Men') }}>MEN</li>
          <li className={`${this.state.gender === 'Women' ? "is-active" : "inactive"}`} onClick={() => { this.displayModal('Women') }}>WOMEN</li>
        </ul>
        <div className='header-logo'>

          <Link to='/' onClick={this.hideModal}><img src={logo} alt='logo' /></Link>
        </div>
        <ul className='header-right'>
          <li>ABOUT</li>
          <li>STORES</li>
          {/* <li><i className="far fa-user"></i></li> */}

          {this.props.currentUser ?
            <li className='option' onClick={() => auth.signOut()}>SIGN OUT</li>
            :
            <li><Link to='/account/login'>SIGN IN</Link></li>
          }

          <li><i className="far fa-question-circle"></i></li>
          <div id="shopping-cart" onClick={this.toggleCartModal}>
            <span className="fa-stack has-badge" data-count={itemCount}>
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
          </div>
        </ul>

        <div className='shopping-cart-mobile' id="shopping-cart" onClick={this.toggleCartModal}>
          <span className="fa-stack has-badge" data-count={itemCount}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
        </div>
        {modal}
        {cartSlide}
      </header>
    );
  }
}

export default Header;
