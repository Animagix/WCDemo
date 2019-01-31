const tag_html = 'users-example';
const attr_title = 'title';

const css = `
    <style>
        :host( ${ tag_html } ) {
            color: #666;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 1.2em;
            line-height: 1.6em;
        }

        .list {
            display: inline-block;
            list-style-type: lower-alpha;
            margin: 10px;
        }

        .list__user {
            background: #dedede;
            margin: 0 0 6px 0;
            padding: 4px 10px;
        }

        .list__user:hover {
            background: #999;
            cursor: pointer;
        }

        .list__user:hover span {
            color: #fff;
        }
    </style>
`;

class CustomExample extends HTMLElement {
  constructor() {
    super();

    this.shadowDom = this.attachShadow({ 'mode': 'open' });

    this.render();
  }

  static get observedAttributes() {
    return [attr_title];
  }

  connectedCallback() {
    console.log('added to DOM');
  }

  disconnectedCallback() {
    console.log('removed from DOM');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(!oldValue) return; // Avoid to re-render on attribute added (first time)

    this.render();
  }

  _renderUsersList() {
    return this.users.map(user => `<li class="list__user"><span>${ user }</span></li>`).join('');
  }

  get title() {
    return this.getAttribute(attr_title);
  }

  set title(value) {
    this.setAttribute(attr_title, value);
  }

  render() {
    this.shadowDom.innerHTML = `
      ${css}
      <h2>${ this.title }</h2>
      <ul class="list">${ this._renderUsersList() }</ul>
    `;
  }
}

customElements.define(tag_html, CustomExample);