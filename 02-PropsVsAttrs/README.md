# 02 - Props Vs Attrs

We have already our basic web component running, yeah!.

Ok ok, let's keep moving, in this section we'll see how can we update our component via property and/or attribute and how our custom element's properties reflect to attributes and vice versa.

> NOTE: Everything is already done in ``` index.html ``` and ``` users-example.js ```

### STEP 0. Some improvements:
You can organize your code whatever you like, but in the first demo ``` 01 - helloWC ``` our web component displayed a list of names hardcoded in the template, so i suggest to make a bit improvement:

**Changing this block...**
```javascript
const template = `
    <style>
        ...
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

**By this other one**
 
> I removed the HTML and i just left the styles changing the name of the constant by ````css````
```javascript
const css = `
    <style>
        ...
    </style>
`;
```

Now, our render method change a little bit:

```javascript
this.shadowDom.innerHTML = `
  ${css}
  <h2> ... </h2>
  <ul class="list"> ... </ul>
`;
```
We can separate styles, html and join them later in the "template string" in a clearer way.

> NOTE: You can render your HTML with ``ìnnerHTML`` or ```appendChild```.
I do not know at this time if there is a substantial improvement in one way or another. I show you how to do it with ```appendChild```: 

```javascript
const template = document.createElement('template');
      template.innerHTML = `
        ${css}
        <h2> ... </h2>
        <ul class="list"> ... </ul>
      `;

this.shadowDom.appendChild(template.content.cloneNode(true));
```

### STEP 1. Adding a title:
