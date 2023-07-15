
const fs = require('fs');
const inquirer = require('inquirer');
const newFile = require("./output") 

console.log('\n================================================\n');
// code will go here
inquirer.createPromptModule([{
    type:"input",
    name:'title',
    message:"what is the title of the project?"
},{
    type:"input",
    name:'description',
    message:"what is the description of your project?"
},{
    type:"input",
    name:'tableOfContents',
    message:"what is the ttable of content for this project?"
},{
    type:"input",
    name:'installation',
    message:"Describe the installation process if any:"
},{
    type:"input",
    name:'usage',
    message:"what is this project used for ?"
},{
    type:"list",
    name:'License',
    message:"what licenses were used for the project?",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},{
    type:"input",
    name:'Contributing',
    message:"who all contributed on this project?"
},{
    type:"input",
    name:'test',
    message:"where any test included"
},{
    type:"input",
    name:'questions',
    message:"what do i do if i have a issue?"
},]);




console.log('\n================================================\n');
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

fs.writeFile('log.txt', 'utf8', (error, data) =>
  error ? console.error(err) : console.log
  ('success')
);
// path needs to be the ouput folder where the new read me goes.

// license and badges will be tricky

// link will also be tricky
