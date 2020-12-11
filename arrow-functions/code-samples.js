// old way

function myFunction () {
    out('inside MyFunction')
}

myFunction()

// execution context

function myFunction() {
    out(this)
  }
  
  var o = { f: myFunction }
  
  myFunction()
  o.myFunction()

// Arror Function Expressions

  // the arrow function is being declared in the global scope
  let f = () => { out(this) }

  // executing the function returns teh global object as expected
  f()

  // create an object and assign the function as a member
  let x = {}
  x.l = l

  // this still executes in teh global context because that was where the function was declared
  x.l()

  // code example

  function Person(name) {
    this.name = name;
    this.display = function() {
      out(this.name || 'no name')
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