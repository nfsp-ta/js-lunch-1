# Arrow Functions
## Intro
Since its inception JavaScript has supported functions as first-class objects, though this has improved over the years to enhance security and enable better tool support.

This means that a function is something that can be assigned to a variable, passed as an argument, and have properties or methods attached to it. 

ES5 introduced Arrow Function Expressions which provide a new syntax for defining a function. In addition to a more compact syntax, functions declared this way have a key difference allowing more intuitive execution scoping.

## The Old Way
```javascript

  function myNamedFunction () {
    out('inside MyNamedFunction')
  }
  myNamedFunction()

  var myAnonFunction = function() {
    out('inside MyAnonFunction')
  }
  myAnonFunction()
```


## Why are Arrow Functions Needed?

1. It looks cool particularly with and editor and font that support ligatures.
2. It saves some typing (between 5-10 characters), thereby reducing the chance of carpal tunnel :D 
3. It changes the way the execution context for the function is determined in a way that makes it more intuitive.

For traditional functions the execution scope for a function is determined at the time the function is executed and so it changes depending on how and when the function is invoked.

This results in an *interesting* behavior surrounding the ```this``` keyword because it always refers to the execution context of the function.

```javascript
function myFunction() {
  out(this)
}

var o = { id: 1, myFunction }

myFunction()
o.myFunction()

const y = o.myFunction
y()

```

Arrow functions change the function declaration syntax to something like ```() => {}``` which is also used for lambda functions in .Net and other languages.

This also changes the execution context to the context in which the function was declared so it remains constant no matter how or when the function is invoked.
## The New Way
```javascript
  // the arrow function is being declared in the global scope
  let f = () => { out(this) }

  // executing the function returns the global object as expected
  f()

  // create an object and assign the function as a member
  let x = {}
  x.l = l

  // this still executes in the global context because that was where the function was declared
  x.l()

  ```
## Is there an equivalent in C#/Java?
* C#
    ```C#
    var activeEmployees = allEmployees.Where(p => p.isActive)
    ```

## Demo
```javascript
function Person(name) {
  this.name = name;
  this.display = function() {
    out((this && this.name) || 'no name')
  }
}

const person = new Person('omar')
person.display()

window.setTimeout(person.display);


var obj = {
  count: 0,
  showCount: function () {
    out(this.count);
  },
  addBtns() {
    button("+", function () {
      this.count++;
      this.showCount();
    });
    button("-", function () {
      this.count--;
      this.showCount();
    });
  }
};

obj.addBtns();
```
## Potential Pitfalls
Object methods should never be arrow functions because you want the context to be the object itself which means it needs to resolve when executed.
