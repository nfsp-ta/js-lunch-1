import { out, button } from "../lib.js";

export function demo() {
  for (var i = 1; i <= 5; i++) {
    button('Test ' + i, function() { alert('you clicked: '+i)});
  }
}