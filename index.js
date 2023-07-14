
const fs = require('fs');
const inquirer = require('inquirer');
const newFile = require("./output/readMe.md") 

fs.writeFile('readMe.md', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
// path needs to be the ouput folder where the new reade me goes.

// license and badges will be tricky

// link will also be tricky
