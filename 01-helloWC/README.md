# 01 - Hello Web Components

In this first step, we create a basic web component. This component display a list of names, like:

> Rodrigo, Gonzalo, Sergio, Juanquer, Manu Hacker

So, what do we do?, everything is already done in ``` index.html ``` and ``` users-example.js ```, but we explain it step by step:

> NOTE: I'll assume that you have basic ES6 knowledge, so i won't stop in some things

### 1. HTML template:

In ```index.html``` we create a custom tag HTML ``` <users-example></users-example> ```, this tag is the one we refer later when we register our component with ``` customElement.define(); ```.

### 2. My module JS:
In this case, we generate a js file that we call it "users-example.js" and load it in our ``` index.html ```.

Now, in our js we create a ES6 class named "CustomExample":

```
class CustomExample extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('added to DOM!');
  }

  disconnectedCallback() {
    console.log('removed from DOM!');
  }

  adoptedCallback() {
    console.log('moved to new DOM!');
  }

  attributeChangedCallback(attrName, oldValue, newValue, domain) {
    console.log('an atribbute has changed or removed!');
  }
}

```

If you're wondering what's that methods ``` connectedCallback ``` and ``` disconnectedCallback ```, let's see **component's LifeCycle**:

**1.constructor:**
Invoked every time the custom element is created.
here we define or set every functionality that the element will have when it's instantiated. We set ```shadow Dom``` and event listeners as well.

> Always call ```super();``` first to inherit from parent class.

**2.connectedCallback:**
Invoked every time the custom element is added to DOM.

**3.disconnectedCallback:**
Invoked every time the custom element is removed to DOM.

**4.adoptedCallback:**
Invoked every time the custom element is moved to new DOM.

**5.attributeChangedCallback:**
Invoked every time an attribute has changed or removed.

### 3. shadow DOM:
In contructor's class we assign a shadow DOM:

```
this.shadowDom = this.attachShadow({ 'mode': 'open' });

```

You noticed that you can pass to the method ```attachShadow()``` an argument that you can set a mode "open" or "closed", the difference between both it's basically that in closed mode you're not allowed to access content of ```shadowRoot``` you'll get a ```null```in response.

### 4. Template:

```
const template = `
    <style>
        :host() {
            color: #666;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 1.2em;
            line-height: 1.6em;
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
```

Using "template strings" it's a way of how we write templates. If you want to render this snippet just do this:

```
this.shadowDom.innerHTML = template;
```

### 5. styles:

In the example above you can see the tag ```<style></syle>``` declared and some styles written in that block, i'm pretty sure you are very familiared with that, except with ```:host() {}```.
This pseudo class selects your custom element tag, in this case it's ```<users-example></users-example>```.

### 6. register and create your custom element:
```
customElements.define(TAG_HTML, CustomExample);
```

This method needs two arguments:
1) The first one is the custom tag HTML.
2) The second one is the instance of the class.



> After all of this, black magic do the rest :)
