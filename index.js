import { out, button } from "./lib.js";
import "./styles.css";

var h = "Hello";
var w = "world";

var message = h + " " + w + "!";

out(message);

var testObject = {
  foo: "bar",
  message: message
};

out(testObject);

for (var i = 1; i <= 5; i++) {
  button('Test ' + i, function() { alert('you clicked: '+i)});
}
