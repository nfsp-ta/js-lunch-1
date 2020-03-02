import { out } from "../lib";

function UnsafePerson(name) {
  this.myname = name;

  this.toString = function() {
    debugger;
    try {
      return out(this.myname);
    } catch (err) {
      out(err);
    }
  };
}

function SafePerson(name) {
  this.name = name;

  this.toString = () => {
    return out(this.name);
  };
}
//

const up = new UnsafePerson("unsafe");
const sp = new SafePerson("safe");

export const runArrowFunctionExample = () => {
  window.setTimeout(up.toString, 1000);
  window.setTimeout(sp.toString, 2000);
};
