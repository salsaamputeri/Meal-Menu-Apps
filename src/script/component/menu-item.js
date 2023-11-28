/* eslint-disable no-underscore-dangle */
class MenuItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s ease;
      position: relative;
    }
    :host(:hover) {
      transform: scale(1.05);
      z-index: 1;
    }
    .gambar {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
    .menu-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    :host(:hover) .menu-info {
      opacity: 1;
    }
    .menu-info h2 {
      margin: 40px 0 5px 0;
    }
    .menu-info p {
      margin: 5px 0;
      text-align: center;
      padding: 0 10px;
    }

    .ingredients {
      max-height: 300px;
      overflow: auto;
      font-size: 16px;
    }
    
    .ingredients::-webkit-scrollbar {
      width: 12px; 
    }
    
    .ingredients::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 6px; 
    }
    
    .ingredients::-webkit-scrollbar-thumb:hover {
      background-color: #555; 
    }

    .search-button {
      cursor: pointer;
      padding: 16px;
      background-color: #BC1823;
      color: white;
      border: 0;
      text-transform: uppercase;
      border-radius: 25px;
      margin-top: 16px; 
    }
  

    /* Media Query untuk layar besar */
    @media screen and (min-width: 768px) {
      .menu-info h2 {
        font-size: 24px; 
        margin: 30px 0 5px 0;
      }
      .menu-info p {
        font-size: 14px; 
      }
    }

    /* Media Query untuk layar kecil */
    @media screen and (max-width: 550px) {
      .menu-info h2 {
        margin: 20px 0 5px 0;
        font-size: 18px;
      }
      .menu-info p {
        padding: 0 5px;
        font-size: 14px;
      }
    }
    </style>

    <div class="menu-item">
    <img class="gambar" src="${this._menu.strMealThumb}" alt="Gambar">
    <div class="menu-info">
      <h2>${this._menu.strMeal}</h2>
      <p>Kategori: ${this._menu.strCategory}</p>
      <p>Bahan-bahan:</p>
      <div class="ingredients">
        ${this.renderIngredients()}
        </div>
        <button class="search-button">Beli Resep Lengkap</button>
      </div>
  </div>  
    `;
  }

  renderIngredients() {
    let ingredients = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 20; i++) {
      const ingredient = this._menu[`strIngredient${i}`];
      if (ingredient) {
        ingredients += `<li>${ingredient} - ${this._menu[`strMeasure${i}`]}</li>`;
      }
    }
    return ingredients;
  }
}

customElements.define('menu-item', MenuItem);
