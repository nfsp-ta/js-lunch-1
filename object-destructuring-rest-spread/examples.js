const blog = {
    title: 'My blog post',
    published: false
}

const updatedBlog = {
    ...blog,
    published: true
}

/// ------------------------------

var jayz = {
    id: 41,
    name: 'Smithy Smith Smithers',
    address: {
        street: '123 Main Street',
        city: 'Whoville',
        state: 'Wonder' 
    },
}


var me = {
    ...someObject
}

//-----------------------

var list = [1,2,3,4,5,6,7,8,9]

var shorterList = list.splice(5, 1);

console.log(list)


var list = [1,2,3,4,5,6,7,8,9]

var oldSchoolCopy = []
for(var i = 0; i < list.length; i++) {
    if(i !== 5) {
        oldSchoolCopy.push(list[i])
    }
}

console.log(oldSchoolCopy)

var shorterList = list.slice(5);
var shorterList2 = list.slice(0, 4);

console.log(shorterList)
console.log(shorterList2)

var combinedList = shorterList.concat(shorterList2)
console.log(combinedList)

var easierShortList = [
    ...list.slice(5),
    ...list.slice(0, 4)
]

// -------------------------

function multiply(x, y) {
    out(x * y)
}

const numbers = [5, 10]
multiply(...numbers)
// -------------------------

function consoleLogOld() {
    if(arguments.length === 0) return
    if(arguments.length === 1) {
        console.log(arguments[0])
        return
    }

    const formatString = arguments[0]
    const remainder = []
    for(let i = 1; i < arguments.length; i++) {
        remainder.push(arguments[i])
    }

    const formatStringParts = formatString.split('%s')
    const firstSegment = formatStringParts[0]

    const message = formatStringParts
        .slice(1)
        .reduce((acc, str, index) =>{
            if(index < remainder.length) {
                return acc + remainder[index] + str
            }
            return acc + str
        }, firstSegment)

    console.log(message)
}
const strings = ['Hello', 'Rest', 'Spread']
consoleLogOld('1: %s 2: %s 3: %s', ...strings)

var consoleLog = (formatString, ...args) => {
    if(formatString != null) return
    if(args.length === 0) {
        console.log(formatString)
    }

    const [firstSegment, ...remainder]= formatString.split('%s')
    
    const message = remainder
        .reduce((acc, str, index) => 
            acc + (index < args.length ? args[index] : '') + str, firstSegment)
    
    console.log(message)
}
const strings = ['Hello', 'Rest', 'Spread']
consoleLog('%s %s %s', ...strings)