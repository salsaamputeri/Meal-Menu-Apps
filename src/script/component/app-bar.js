class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
          padding: 16px;
          width: 100%;
          background-color: #952323;
          color: #f9f3e0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
        }
      </style>
      
      <h2>Meal Menu</h2>
      <p>Your Daily Recipe</p>`;
  }
}

customElements.define('app-bar', AppBar);
