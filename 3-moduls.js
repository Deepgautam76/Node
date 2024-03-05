//CommonJS, every fie is module (by default)
//Modules -Encapsulated Code (only shere minimum)

const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-simpleCode')
// console.log(data)


sayHi("kamal")
sayHi(names.name1)
sayHi(names.name2)
// console.log(data.item[0])
// console.log(data.AllPerson.name)
// console.log(data.AllPerson.course)