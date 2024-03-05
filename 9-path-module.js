const path=require('path')
console.log(path.sep)


//this is join the path of the file  pass in the join 
const filePath=path.join('/content','subfolder','test.txt')

console.log(filePath)

//this is return path of the base file
const base=path.basename(filePath)
console.log(base)

//this the return the absolute path of the file (location in the disk)
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)