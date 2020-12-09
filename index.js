import { out, button } from "../lib.js";
import "./styles.css";
// ^^^ Ignore this ;) ^^^

// Think of this as fancy console.log()
out("Hello World!");

// Easier way to demo callback-like functionality (label, callback)
button("Click Me", function () {
  alert("Hi!");
});

// displayPerson({ name, id, address: { city } }) {
//   out(`${name} has id ${id} and is in ${city}`)
// }

var person = {
  name: "Omar",
  id: 42,
  address: {
    street: "",
    city: "Tallahassee"
  }
};

const {
  name,
  id,
  address: { city }
} = person;
out(`${name} ${city}, ${id}`);

// displayPerson(person)
