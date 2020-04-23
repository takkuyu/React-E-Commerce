import React from 'react';

function HeaderModal() {
  return (
      <div id='modal' className="header-modal-container">
          <nav>
            <ul>
              <li className='men-list'>
                <a href=''>MEN</a>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li className='women-list'>
                <a href=''>WOMEN</a>
                <i class="fas fa-chevron-right"></i>
              </li>
              <li><a href=''>STORES</a></li>
              <li><a href=''>Account</a></li>
              <li><a href=''>Help</a></li>
            </ul>
          </nav>
      </div>
  );
}

export default HeaderModal;