import React from 'react';
import HeaderModal from './header-modal.component';

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
    return (
      <header className="landing-header">
        {
          this.state.modal ?
            <i id='bars' className="fas fa-times" onClick={this.displayModal}></i>
            :
            <i id='bars' className="fas fa-bars" onClick={this.displayModal}></i>

        }
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
          <li><i className="fas fa-shopping-cart"></i></li>
        </ul>
        <li className='mobile-cart'><i className="fas fa-shopping-cart"></i></li>
        {modal}
      </header>
    );
  }
}

export default Header;
