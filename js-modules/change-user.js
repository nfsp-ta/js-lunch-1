import { user } from './user.js'

const changeName = (newName) => {
    user.name = newName;
}

export { changeName }