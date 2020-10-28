# `const` / `let` vs. `var`
## Intro

ES5 (2009) introduced two new means of declaring variables, `let` and `const`

## The Old Way

Traditionally JS allowed two ways of declaring variables
- Implicit assignment 
  ```javascript
  x = 1; // very bad do not do this ever
  ``` 
- Explicit declaration using var
  ```javascript
  var x = 1;
  ```

Both of these approaches have differing scoping rules, all of which involve potentially hoisting the variable into a higher scope.
  - Implicit assignments are effectively global, they are declared in the outer most scope.
  - Explicit assignments are scoped to the containing function *NOT* the enclosing block.

## Why are `const` and `let` needed?

  Traditional scoping rules are non-intuitive to developers whether they are a novice or an expert in some other language because most languages support block scoping and do not implicitly hoist the variables. This can also lead to sloppy programming practices where the same variable is inadvertently used. 

## The New Way

  Unlike implicit assignment, or explicit `var` assignment, both `let` and `const` are lexically and block scoped.

  - `let` declares a variable that is available only after the point of declaration and until the current code block ends.
  - `const` declares a constant value with the same scoping rules as `let`.

## Is there an equivalent in C#/Java?

  C# and Java variable or constant declarations are always lexically and block scoped.

## Demo

  ```javascript
  // Because var is scoped outside the for loop, it's value is wrong on a callback
  for (var i = 1; i <= 5; i++) {
    button('Test ' + i, function() { alert('you clicked: '+i)});
  }

  // Javascript ignores redeclaration for var, so declaring the same name in an
  //  inner scope doesn't work as intended.
  for (var i = 1; i <=3; i++) {
    out('Outer loop count: ' + i);
    for (var i = 1; i <=3; i++) {
      out('Inner loop count: ' + i);
    }
  }

  // A var can be used before declared...
  //  (note: doesn't work right in codesandbox)
  function test() {
    console.log(someRandomThing); // This is fine...
    var someRandomThing = ''; // ...as long as this is here
  }
  ```

## Where will I see this?

  - Ideally, every time a variable is declared anywhere in javascript.

## Potential Pitfalls

  `const` objects and arrays are not immutable!

  ```javascript
  const obj = { foo: 'bar' };
  
  obj = { foo: 'baz' }; // Can't do this!
  obj.foo = 'baz'; // but this is fine.
  
  out (obj);

  // Also...

  const ary = ['foo','bar'];
  
  ary = []; // Can't do this!
  ary.pop(); // but this is fine.
  ary[0] = 'baz'; // and this is fine too.
  
  out (ary);
  ```

## Q & A
