# Template Literals
## Intro

It's rare that a variable is displayed to the user or logged in its 'raw form'
```javascript
function addToCart(name, quantity) {

  // Kinda useless without context.
  console.log(name);
  console.log(quantity);

  // ... snip ...
};
```
More often, we need to add context around those variables

## The Old Way
* String concatenation
  ```javascript
  function addToCart(name, quantity) {

    console.log('Adding ' + quantity + ' of item "' + name + '" to the cart.');
   
    // ... snip ...
  };
  ```

## Why are Template Literals Needed?

String concatenation cons:
* Hard to read
* Difficult to visualize what the result will be
* Ugly
* Could end up adding numbers 
  ```javascript
    const str1 = 1;
    const str2 = 2;
    const str3 = '3';

    console.log('Pull pin...');
    console.log('...count to 3...');
    console.log(str1 + str2 + str3 + '!!!');

    // logs "33!!!" instead of "123!!!"
  ```
* Doesn't cross line-breaks
  ```javascript
    // This won't work...
    const header = '<h1>
                      Hello, ' + username + '!
                    </h1>';

    // So we end up doing something like this...
    const header = '<h1>'
                    + 'Hello, ' + username + '!'
                 + '</h1>';
    
    // ... and then feel sad :(
  ```

## The New Way
```javascript
function addToCart(name, quantity) {

   // Sooooo much better
   console.log(`Adding ${quantity} of item "${name}" to the cart.`);

   // ... snip ...
};

// And this works as expected too! :D
const header = `<h1>
                  Hello, ${username}!
                </h1>`;

// BONUS: Escaping is better!
const annoying1 = 'She said: "Isn\'t it a nice day!"';
const annoying1 = "She said: \"Isn't it a nice day!\"";
const notTooBad = `She said: "Isn't it a nice day!"`;
```

## Is there an equivalent in C#/Java?
* C#
    ```C#
    void addToCart(string name, int quantity)
    {
        Console.WriteLine($"Adding {quantity} of item '{name}' to the cart.");

        // ... snip ...
    }
    ```

## Where will I see this?
Because of the numerous advantages, Template Literals are very common in modern JavaScript. 

## Potential Pitfalls
Pretty indentation in the code doesn't produce pretty indentation in the strings.

```javascript
const header = `<h1>
                  Hello, ${username}!
                </h1>`;                
```
...produces the string:
```
<h1>
                  Hello, User123!
                </h1>
```
Many times, this doesn't matter, but it's good to keep in mind.

## Q & A
