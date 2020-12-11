# Template Literals
## Intro
As a 'scripting' language, early JavaScript didn't even think about modules. The thought was that scripts would be short, and most of the page would be content.
As the language grew, so did the amount of code and the need to split that code up into manageable, reusable chunks.

## The Old Way
- Separate .js files
    - Pretty much loaded into the same scope/context
- JavaScript Libraries
    - jQuery, lodash

## The New Way & Why it is Needed

The problem with the old approach is that everything is on the global scope.
This leads to libraries using weird names to prevent collisions ($, _)
Think about what the C# ecosystem would look like without namespaces, class names would be a mess...
Also, load order (the order of the `<script>` tags) is a big problem.

To address this ES6 (2015) introduced a language-level module system using the `import` and `export` statements.

A js file can now explicitly export live bindings to functions, objects or primitives which can be imported by other modules.

Each module has its own scope. So different modules can use the same variable names locally without fear of collision.

Even if two modules export the same names, you can rename them on import.

## Is there an equivalent in C#/Java?

JavaScript's module system is different enough from other languages that it doesn't help much to compare it.

## Demo

(Show in code sandbox)

## Potential Pitfalls

## Q & A

- Intro
- The Old Way
- The New Way & Why it is Needed
- Is there an equivalent in C#/Java?
- Demo
- Potential Pitfalls
- Q & A
