import { out } from "../lib";

export const badVar = () => {
  var objects = [1, 2, 3, 4, 5, 6, 7];

  // try let?
  for (var i = 0; i < objects.length; i++) {
    window.setTimeout(function() {
      out(i);
    }, 500 * i);
  }
};

// should we bother with const examples?
let s = "";
s = s + s + s;

const z = "";
z + s + s;
