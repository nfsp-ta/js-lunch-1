const blog = {
    title: 'My blog post',
    published: false
}

const updatedBlog = {
    ...blog,
    published: true
}

/// ------------------------------

var someObject = {
    id: 41,
    name: 'Smithy Smith Smithers',
    address: {
        street: '123 Main Street',
        city: 'Whoville',
        state: 'Wonder' 
    },
  }
  
  
  var objectCopy = {
    ...someObject
  }
  out(objectCopy)
  out(objectCopy === someObject)
  
  out(JSON.stringify(objectCopy) === JSON.stringify(someObject))
  
  out(objectCopy.address === someObject.address)

//-----------------------

var list = [1,2,3,4,5,6,7,8,9]

var shorterList = list.splice(5, 1);

out(list)


var list = [1,2,3,4,5,6,7,8,9]

var oldSchoolCopy = []
for(var i = 0; i < list.length; i++) {
    if(i !== 5) {
        oldSchoolCopy.push(list[i])
    }
}

out(oldSchoolCopy)

var shorterList = list.slice(0, 5);
var shorterList2 = list.slice(6);

var combinedList = shorterList.concat(shorterList2)
out(combinedList)

var easierShortList = [
...list.slice(0, 5),
...list.slice(6)
]
  
out(easierShortList)

// -------------------------

function multiply(x, y) {
    out(x * y)
}

const numbers = [5, 10]
multiply(...numbers)
// -------------------------

function printf() {
    if(arguments.length === 0) return
    if(arguments.length === 1) {
        out(arguments[0])
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

    out(message)
}
const strings = ['Hello', 'Rest', 'Spread']
printf('1: %s 2: %s 3: %s', ...strings)

var printfNew = (formatString, ...args) => {
    if(formatString == null) return
    if(args.length === 0) {
        out(formatString)
    }
  
    const [firstSegment, ...remainder]= formatString.split('%s')
    
    const message = remainder
        .reduce((acc, str, index) => 
            acc + (index < args.length ? args[index] : '') + str, firstSegment)
    
    out(message)
  }
  const strings = ['Hello', 'Rest', 'Spread']
  printfNew('1: %s 2: %s 3: %s', ...strings)