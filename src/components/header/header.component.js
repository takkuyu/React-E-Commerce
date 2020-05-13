import React from 'react';
import HeaderModal from './header-modal.component';
import { withRouter } from 'react-router-dom'
import logo from '../../img/takaya-logo.png';
import { Link } from 'react-router-dom';
import CartSlide from './header-cartslide.component';
// import { auth } from '../../firebase/firebase.utils';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true,
      gender: '',
      slideModal: false
    }
    this.displayModal = this.displayModal.bind(this); // @Note: needed for setState
    this.hideModal = this.hideModal.bind(this); // @Note: needed for setState
    this.handleSlideList = this.handleSlideList.bind(this); // @Note: needed for setState
    // console.log(this.props.currentUser)
    // console.log(this.props)
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
      gender: '',
      slideModal: false
    })
  }

  handleSlideList(gender){
    this.setState({
      slideModal: !this.state.slideModal,
      gender: gender
    })
  }

  render() {
    const modal = (
      this.state.modal ?
        <HeaderModal
          hideModal={this.hideModal}
          handleSlideList={this.handleSlideList}
          gender={this.state.gender}
          slideModal={this.state.slideModal}
        />
        :
        '')

    const modal_icon = (this.state.modal ?
      <i id='bars' className="fas fa-times" onClick={() => { this.setState({ modal: !this.state.modal }) }} ></i>
      :
      <i id='bars' className="fas fa-bars" onClick={() => { this.setState({ modal: !this.state.modal }) }}></i>)


    const cartSlide = (this.props.cartModal ?
      <CartSlide
        toggleCartModal={this.props.toggleCartModal}
        itemCounter={this.props.itemCounter}
        updateCartCounter={this.props.updateCartCounter}
      /> : '');

    // const shoppingCart = (this.props.location.pathname !== '/checkout' ? :'')

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
          {this.props.currentUser.id !== '' ?
            <li><Link to='/account'><i className="far fa-user"></i></Link></li>
            :
            <li><Link to='/account/login'><i className="far fa-user"></i></Link></li>
          }
          <li><i className="far fa-question-circle"></i></li>
          {
            this.props.location.pathname !== '/checkout' ?
              <div id="shopping-cart" onClick={this.props.toggleCartModal}>
                <span className="fa-stack has-badge" data-count={this.props.itemCounter}>
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
              </div>
              :
              ''
          }
        </ul>
        {
          this.props.location.pathname !== '/checkout' ?
            <div className='shopping-cart-mobile' id="shopping-cart" onClick={this.props.toggleCartModal}>
              <span className="fa-stack has-badge" data-count={this.props.itemCounter}>
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
            </div>
            :
            ''
        }
        {modal}
        {cartSlide}
      </header>
    );
  }
}

export default withRouter(Header);
