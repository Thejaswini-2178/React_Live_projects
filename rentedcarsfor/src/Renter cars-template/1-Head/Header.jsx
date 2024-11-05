import React, { Component } from 'react';
import headerData from './headerData.json';

class Header extends Component {
  render() {
    const { header } = headerData;
    const { brand, userOption, menuButton, overlay } = header.container.navbar;

    return (
      <header className={header.className}>
        <div className={header.container.className}>
          <nav className={header.container.navbar.className}>
            <a className="navbar-brand" href={brand.href}>
              <span>{brand.text}</span>
            </a>

            <div className="navbar-collapse">
              <div className="user_option">
                <a href={userOption.href}>{userOption.text}</a>
              </div>
              <div className="custom_menu-btn">
                <button onClick={() => window[menuButton.onClick]()}>
                  {menuButton.spans.map((spanClass, index) => (
                    <span key={index} className={spanClass}> </span>
                  ))}
                </button>
              </div>
              <div id={overlay.id} className={overlay.className}>
                <div className="overlay-content">
                  {overlay.links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
