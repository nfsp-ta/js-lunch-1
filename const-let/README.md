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

## Why are `const` and `let` needed?

`var`s are scoped to the containing function _NOT_ the enclosing block. At best, this is confusing; at worst, it can cause bugs.
The scoping rules of `var` are non-intuitive to developers because most languages support block scoping and do not implicitly hoist the variables. Additionally, `var` can be redeclared without raising an error, which could lead to all sorts of weirdness.

## The New Way

Unlike `var` assignment, both `let` and `const` are lexically and block scoped.

- `let` declares a variable that is available only after the point of declaration and until the current code block ends.
- `const` has the same scoping rules, but declares a constant which can't be changed after assignment. (Also, you must assign at declaration)

## Is there an equivalent in C#/Java?

C# and Java variable or constant declarations are always lexically and block scoped, thus `let` is more like C#'s `var` than `var` is :D

## Demo

```javascript
// Because var is scoped outside the for loop, it's value is wrong on a callback
for (var i = 1; i <= 5; i++) {
  button("Test " + i, function () {
    alert("you clicked: " + i);
  });
}

// Javascript ignores redeclaration for var, so declaring the same name in an
//  inner scope doesn't work as intended.
for (var i = 1; i <= 3; i++) {
  out("Outer loop count: " + i);
  for (var i = 1; i <= 3; i++) {
    out("Inner loop count: " + i);
  }
}

// A var can be used before declared...
//  (note: doesn't work right in codesandbox)
function test() {
  console.log(someRandomThing); // This is fine...
  var someRandomThing = ""; // ...as long as this is here
}
```

## Where will I see this?

- Ideally, every time a variable is declared anywhere in javascript. (Down with `var`!)

## Potential Pitfalls

`const` objects and arrays are not immutable!

```javascript
const obj = { foo: "bar" };

obj = { foo: "baz" }; // Can't do this!
obj.foo = "baz"; // but this is fine.

out(obj);

// Also...

const ary = ["foo", "bar"];

ary = []; // Can't do this!
ary.pop(); // but this is fine.
ary[0] = "baz"; // and this is fine too.

out(ary);
```

Unlike C#, variables can be redeclared in an inner scope

```javascript
let x = 1;
let x = "Hello"; // Can't do this!
if (true) {
  let x = "Hello"; // but this is fine...
  out(x);
}

{
  let x = "Hello"; // or even this
}
```

## Q & A
