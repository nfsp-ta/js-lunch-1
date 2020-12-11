# Object Destructuring
## Intro
Accessing data from an object or an array and assigning it to a variable is a very common use case in programming as is the need to differentiate some values from others based on name or position. Object destructuring through the rest and spread operators provides a new more concise syntax for this.

## The Old Way
```javascript
displayPerson(person) {
    var id = person.id
    var name = person.name
    out(`${person.name} has id ${person.id}`)
}

var person = { name: 'Omar': id: 42 }
displayPerson(person)

var a = [1,2,3,4,5,6,7]

var first = a[0]
var first = a[1]
var rest = a.slice(2)

```
## Why is Object Destructuring Needed?
Object destructing provides no performance benefit over traditional variable assignment but it aids readability by being more concise. It makes writing code using immutable structures much easier since it creates a new object without modifying the original.

## The New Way
```javascript

// for objects, destructuring uses the field name so
// { name, id } and { id, name } are equivalent

displayPerson({ name, id }) {
    out(`${name} has id ${id}`)
}

var person = { name: 'Omar': id: 42 }
displayPerson(person)

// for arrays destructuring is positional so 

var a = [1,2,3,4,5,6,7]
const [ first, second, ...rest ] = a

```
## Is there an equivalent in C#/Java?
* C# 

C# has no direct equivalent for destructuring but tuples exhibit behavior which is similar with a caveat that tuples follow the array behavior where values are positional rather than based on names

```c#
var payLoad = (
    Username: "MHamzaRajput",
    Password: "password",
    Domain: "www.xyz.com",
    Age: "24" 
);

var (Username, Password, Domain, Age) = payLoad;
// or
var (username, password, _, _) = payLoad;

Console.WriteLine($"Username: {username} and Password: {password}"); 
```

C# also supports the `params` keyword in function declarations which acts like the rest operator collecting multiple parameters into a single array parameter.

## Demo


## Where will I see this?
The use of object destructuring is widespread, its widely used for import statements, and libraries such as react which encourage passing data through many levels can benefit quite a lot from this both for conciseness and also for reduced code churn when new values are introduced. Using a local state store such as redux also require that we write prue functions so the spread operator makes this much simpler.


## Potential Pitfalls
spreading an object or array is a shallow copy, 

## Q & A
