## const/let vs. var
- Intro/Supporting context

  Traditionally js allowed two methods to declare variables
  - Implicit assignment e.g. `x = 1 \\ very bad do not do this ever` 
  - Explicit declaration using var e.g. `var x = 1`

  Both of these approaches have differing scoping rules, all of which involve potentially hoisting the variable into a higher scope.
  - Implicit assignments are effectively global, they are declared in the outer most scope.
  - Explicit assignments are scoped to the containing function *NOT* the enclosing block.

- Why?

  Traditional scoping rules are non-intuitive to developers whether they are a novice or an expert in some other language because most languages support block scoping and do not implicitly hoist the variables. This can also lead to sloppy programming practices where the same variable is inadvertently used. 

- Old way

- New Way

  ES5 introduced two new means of declaring variables, both of which are lexically and block scoped.

  - `let` which declares a variable that is available only after the point of declaration and until the current code block ends.
  - `const` which declares a constant value with the same scoping rules as `let`.

- Is there an equivalent in C#/Java?

  C# and Java variable or constant declarations are always lexically and block scoped.

- Deep Dive if necessary

  - Unnecessary??

- Where will I see this?

  - Ideally, every time a variable is declared anywhere in javascript.

- Q & A


