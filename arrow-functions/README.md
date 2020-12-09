# Arrow Functions
## Intro
Since its inception JavaScript has supported functions as first-class objects, though this has improved over the years to enhace security and enable better toll support.

This means that a function is something that can be assigned to a variable, passed as an argument, and have properties or methods attached to it. 

ES% introduced Arrow Function Expressions which provide a new syntax for defining a function. In addition to a more compact syntax, functions declared this way have a key difference allowing more intuitive execution scoping.

## The Old Way
```javascript

  function myFunction () {
    out('inside MyFunction')
  }

  myFunction()
```


## Why are Arrow Functions Needed?

1. It saves some typing, thereby reducing the chance of carpal tunnel.
2. It changes the way the execution context for the function is determined in a way that makes it more intuitive.

In Javascript the execution scope for a function is determined at the time the function is executed and it changes depending on how the functions is invoked.

This results in an *interesting* behavior surrounding the ```this``` keyword because it always refers to the execution context of the function.

```javascript
function myFunction() {
  out(this)
}

var o = { f: myFunction }

myFunction()
o.myFunction()

```

Arrow functions change the function declaration syntax to something like ```() => {}``` which is also used for lambda functions in .Net and other languages.

Aside from being a shorter syntax it changes the execution scope to the scope in which the function was declared so it remains constant no matter how the function is invoked.
## The New Way
```javascript
  // the arrow function is being declared in the global scope
  let f = () => { out(this) }

  // executing the function returns teh global object as expected
  f()

  // create an object and assign the function as a member
  let x = {}
  x.l = l

  // this still executes in teh global context because that was where the function was declared
  x.l()

  ```
## Is there an equivalent in C#/Java?
* C#
    ```C#
    var activeEmployees = allEmployees.Where(p => p.isActive)
    ```

## Demo
```javascript
var obj = {
  count: 0,
  showCount: function () {
    out(this.count);
  },
  addBtns: function () {
    button("+", function () {
      this.count++;
      this.showCount();
    });
    button("-", function () {
      this.count--;
      this.showCount();
    });
    button("broken", function () {
      const showCount = this.showCount()
      showCount();
    });
  }
};

obj.addBtns();
```

## Where will I see this?

Literally everywhere, javascript code generally favors passing functions as data through callbacks or attached to promises.

## Potential Pitfalls
Object methods... "this is not this"

## Q & A
