/* eslint-disable no-underscore-dangle */
import './menu-item';

class MenuList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      text-align: center;
      color: #555;
      font-style: italic;
    }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    if (this._menus && this._menus.length > 0) {
      this._menus.forEach((menu) => {
        const menuItemElement = document.createElement('menu-item');
        menuItemElement.menu = menu;
        this.shadowDOM.appendChild(menuItemElement);
      });
    } else {
      this.renderError('Menu tidak ditemukan');
    }
  }
}

customElements.define('menu-list', MenuList);
