import React from 'react';
import HeaderModal from './header-modal.component';
import { CSSTransition } from 'react-transition-group';
import logo from '../../img/takaya-logo.png';


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      gender: ''
    }
    this.displayModal = this.displayModal.bind(this); // @Note: needed for setState
    this.hideModal = this.hideModal.bind(this); // @Note: needed for setState
  }

  displayModal(gender) {

    this.setState({
      modal: true,
      gender: gender
    })
  }

  hideModal() {
    this.setState({
      modal: !this.state.modal,
      gender: ''
    })
  }

  render() {
    const modal = (
      this.state.modal ?
        <HeaderModal
          hideModal={this.hideModal}
          gender={this.state.gender}
        />
        :
        '')

    const modal_icon = (this.state.modal ?
      <i id='bars' className="fas fa-times" onClick={this.displayModal} ></i>
      :
      <i id='bars' className="fas fa-bars" onClick={this.displayModal}></i>)

    return (
      <header className="landing-header">
        {modal_icon}
        <ul className='header-left'>
          <li className={`${this.state.gender === 'Men' ? "is-active" : "inactive"}`} onClick={() => { this.displayModal('Men') }}>MEN</li>
          <li className={`${this.state.gender === 'Women' ? "is-active" : "inactive"}`} onClick={() => { this.displayModal('Women') }}>WOMEN</li>
        </ul>
        <div className='header-logo'>

          <img src={logo} alt='logo' />
        </div>
        <ul className='header-right'>
          <li>SIGNIN</li>
          <li>STORES</li>
          <li><i className="far fa-user"></i></li>
          <li><i className="far fa-question-circle"></i></li>
          <div id="shopping-cart">
            <span class="fa-stack has-badge" data-count="0">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
          </div>
        </ul>

        <div className='shopping-cart-mobile' id="shopping-cart">
          <span class="fa-stack has-badge" data-count="0">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
        </div>

        {modal}
      </header>
    );
  }
}

export default Header;
