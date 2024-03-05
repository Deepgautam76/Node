//this is the method use for read the text file using  (readFile) without async method
//this is the method use for write content in the text file using (writeFile) without async method

//fs is the enabling the module of the file system
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt",'utf8', (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result)
  //if we dont write the above utf then use the down clg give the same result
//   console.log(result.toString());
});
