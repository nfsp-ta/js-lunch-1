import { out } from "./lib.js";

import { badVar } from "./const-let";

import { runArrowFunctionExample } from "./arrow-functions";

var h = "Hello";
var w = "world";

var message = h + " " + w + "!";

out(message);

var testObject = {
  foo: "bar",
  message: message
};

out(testObject);

badVar();

// goodLet();

runArrowFunctionExample();
