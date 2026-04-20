console.log("Coding is the best");

const fs = require("fs");
fs.writeFile("output.txt", "Writing file", (err) => {
  if (err) console.log("Erroe occurred");
  else console.log('File written successfully');
})