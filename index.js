import { out } from "./lib.js";

var h = "Hello";
var w = "world";

var message = h + " " + w + "!";

out(message);

var testObject = {
  foo: "bar",
  message: message
};

out(testObject);
