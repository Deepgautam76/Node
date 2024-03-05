//this is the method use for read the text file using  (readFileSync) this is sync method
//this is the method use for write content in the text file using (writeFileSync) this is sync method

//fs is the enabling the module of the file system
const { readFileSync, writeFileSync } = require("fs");

//utf8 is encriptin and decription defalut
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first)
// console.log(second)

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
   //this is use for the apend
   {flag:'a'}
);
