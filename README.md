# Web Components Demo
This repo it's just an introduction and a demo of **web components**

### Before we start:
> You can see many documentation from others in blogs, webs, etc. You can start seeing 
the W3C repo in [Github](https://github.com/w3c/webcomponents/), the website [webcomponents.org](https://www.webcomponents.org/introduction) and it's [Github](https://github.com/webcomponents)

### Concepts:
Web Components is a suite of differents features based on web standards provided by modern browsers.
This features pretend to help developers to "re using code", nowdays, many frameworks give developers this feature
, the problem is each framework provide it's own component kind, under my point of view this isn't a problem but it can be it, all depends of your needs or what you want.
So, what if i tell you web components work in modern browsers without any layer, library or framework over it?, sounds good, right?, at least at the beginning... as everything in life, it has it's lights and shadows.

> NOTE: if you like to give support to old browsers like IE11 there are polyfills for it.

##### The four pillars:
- **Custom Elements**: Custom Dom element with it's behaviour. You can create custom snippets of HTML with custom CSS.
    > NOTE: To register a custom element you must invoke ```customElements.define("custom-tag", class);```, this will construct a new instance of your class. 
- **Shadow Dom**: It's a sub tree rendered in DOM separately way into the node ```shadowRoot```. The main purpose of shadow DOM is encapsulate your custom element to make it private, this makes as well that everything from outside can not affect anything to your component.
- **ES Modules**: This is basically the module import system of javascript, example: 
    > JS way: ```import { myExample } from "src/js/example.js"```
    
    > HTML way: ```<script type="module" src="src/js/example.js">```

- **HTML Templates**: Provides custom tag HTML ```<custom-tag></custom-tag>``` and the element ```<slot>``` that we'll see it later.

### Let's start!:
