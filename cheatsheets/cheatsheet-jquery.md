# jQuery Cheat Sheet
How to use jQuery to manipulate the DOM.

### Find Elements on the Page
```js
var elements = $("some .css.selector");
```

### Modify an Element
Set

```js
el.attr("href", "http://example.com");
el.html("Hello <em>World</em>!");
el.text("Hello World!");
el.addClass("some-class"); // or removeClass or toggleClass
inputEl.val("Some Value"); // Set value of a input element
inputEl.val(""); // Clear an input element
```

Get

```js
var type = el.attr("type");
var html = el.html();
var text = el.text();
var value = inputEl.val(); // get what the user typed into an input
```

### Create an Element
```js
// Step 1: Create a basic element.
var el = $("<a>");
// Step 2: Set appropriate content and attributes.
el.text("Click Me");
el.attr("href", "http://example.com");
// Step 3: Add the element to the page at the appropriate location.
parentEl.append(el);
```

or

```js
// Step 1: Create a fully formed element.
var el = $('<a href="http://example.com">Click Me</a>');
// Step 2: Add the element to the page at the appropriate location.
parentEl.append(el);
```

or

```js
parentEl.append('<a href="http://example.com">Click Me</a>');
```

### Listen for an Event
```js
el.on("click", function(event) {
    // Code here runs every time the element is clicked.
    this; // optionally use this to access the element that was clicked.
});
```