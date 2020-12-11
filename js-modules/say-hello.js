import { user } from './user.js'
import { out } from "../lib.js";

const sayHelloToUser = () => {
    out(`Hello ${user.name}!`);
}

export { sayHelloToUser as default };