import React from 'react';
import HeaderModal from './header-modal.component';
import { CSSTransition } from 'react-transition-group';


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      modal: false
    }
    this.displayModal = this.displayModal.bind(this); // @Note: needed for setState
  }

  displayModal() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const modal = (this.state.modal ? <HeaderModal /> : '')
    const modal_icon = (this.state.modal ?
      <i id='bars' className="fas fa-times" onClick={this.displayModal} ></i>
      :
      <i id='bars' className="fas fa-bars" onClick={this.displayModal}></i>)

    return (
      <header className="landing-header">
        {modal_icon}
        <ul className='header-left'>
          <li>MEN</li>
          <li>WOMEN</li>
        </ul>
        <p className='header-center'>Logo</p>
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
