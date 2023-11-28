/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 10px;
          border-radius: 50px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: #f7f7f7;
          z-index: 2;
        }
        
        .search-container > input {
          width: 70%;
          padding: 16px;
          border: 0;
          border-radius: 50px;
          font-weight: bold;
          background-color: #f7f7f7;
        }
        
        .search-container > input:focus {
          outline: 0;
        }
        
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container > input::placeholder {
          color: #BC1823;
          font-weight: normal;
        }
        
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #BC1823;
          color: white;
          border: 0;
          text-transform: uppercase;
          border-radius: 25px;
        }
        
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
        
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
        
          .search-container > button {
            width: 100%;
          }
        }      
        </style>
      
        <div id="search-container" class="search-container">
        <input placeholder="Cari Menu Makanan" id="searchElement" type="search">
        <button id="searchButtonElement" type="button">Search</button>
        </div>
      `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
