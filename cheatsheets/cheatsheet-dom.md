# DOM Cheat Sheet
Basic straight JavaScript DOM stuff.

### Find Elements on the Page
Returns one element:

```js
var el = document.getElementById("some-id"); // Don't use '#'
var el = document.querySelector("some .css.selector");
var parent = el.parentElement;
```

Returns a NodeList (like an array) of elements:

```js
var els = document.getElementsByClassName("some-class"); // Don't use '.'
var divs = document.getElementsByTagName("div");
var els = document.querySelectorAll("some .css.selector");
var children = el.childElements;
```

### Modify an Element
Set

```js
el.setAttribute("href", "http://example.com");
el.innerHTML = "Hello <em>World</em>!";
el.textContent = "Hello World";
inputEl.value = "Some Value"; // Set value of a input element
inputEl.value = ""; // Clear an input element
el.style.backgroundColor = "red"; // individual CSS property (use camel case)
el.className = "some-class";
el.classList.add("some-class");
el.classList.remove("some-class");
```

Get

```js
var type = el.getAttribute("type");
var html = el.innerHTML;
var text = el.textContent;
var value = inputEl.value; // get what the user typed into an input
```

### Create an Element
```js
// Step 1: Create a basic element.
var el = document.createElement("a");
// Step 2: Set appropriate content and attributes.
el.innerHTML = "Click Me";
el.setAttribute("href", "http://example.com");
// Step 3: Add the element to the page at the appropriate location.
parentEl.appendChild(el);
```

### Listen for an Event
```js
el.onclick = function(event) {
    // Code here runs every time the element is clicked.
}
```

or in HTML

```html
<button type="button" onclick="myFunction()">Click Me</button>
<button type="button" onclick="anyJavaScript.here++">Click Me</button>
```