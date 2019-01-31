const TAG_HTML = 'users-example';
const template = `
    <style>
        :host( ${ TAG_HTML } ) {
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
    <ul class="list">
        <li class="list__user"><span>Raúl</span></li>
        <li class="list__user"><span>Rodri</span></li>
        <li class="list__user"><span>Sergio</span></li>
        <li class="list__user"><span>Juanquer</span></li>
        <li class="list__user"><span>Manu Hacker</span></li>
    </ul>
`;

class CustomExample extends HTMLElement {
  constructor() {
    super();

    console.log('custom element created!');

    this.shadowDom = this.attachShadow({ 'mode': 'open' });

    this.render();
  }

  connectedCallback() {
    console.log('added to DOM');
  }

  disconnectedCallback() {
    console.log('removed from DOM');
  }

  adoptedCallback() {
    console.log('adopted in a new DOM');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('an atribbute has changed or removed');
  }

  render() {
    this.shadowDom.innerHTML = template;
  }
}

customElements.define(TAG_HTML, CustomExample);