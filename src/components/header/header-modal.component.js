import React from 'react';

function HeaderModal() {
  return (
      <div id='modal' className="header-modal-container">
        <div className="header-modal">
          <nav>
            <ul>
              <li><a href=''>Home</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Contact</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Careers</a></li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

export default HeaderModal;