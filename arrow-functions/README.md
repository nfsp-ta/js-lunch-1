# Arrow Functions
## Intro
Since the very first version, JavaScript has supported anonymous functions, thought they were significantly improved in ES3 in 1999.
These anonymous functions could be passed as parameters to other higher order functions.

An example almost everyone is familiar with:
```javascript
setTimeout(function() { alert('Hello!'); }, 3000);
``` 
In recent years, we've become increasingly aware of the following syntax:
`() => {}`
With C# 

## The Old Way

## Why are Arrow Functions Needed?

## The New Way

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
  }
};

obj.addBtns();
```

## Where will I see this?

## Potential Pitfalls
Object methods... "this is not this"

## Q & A
