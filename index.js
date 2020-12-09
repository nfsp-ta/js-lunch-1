import { out, button } from "../lib.js";
import "./styles.css";
// ^^^ Ignore this ;) ^^^

// Think of this as fancy console.log()
out('Hello World!');

// Easier way to demo callback-like functionality (label, callback)
button('Click Me', function() { alert('Hi!'); });