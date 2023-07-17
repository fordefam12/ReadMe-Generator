const fs = require("fs");
const inquirer = require("inquirer");
const newFile = require("./temp/readmeTemp");

// code will go here
const userInput = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of the project?",
    },

    {
      type: "input",
      name: "description",
      message: "what is the description of your project?",
    },
    
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any:",
    },
    {
      type: "input",
      name: "usage",
      message: "what is this project used for ?",
    },
    {
      type: "list",
      name: "License",
      message: "what licenses were used for the project?",
      choices: [
        "Academic Free License v3.0",
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause license",
        "BSD 3-clause license",
        "BSD 3-clause Clear license",
        "BSD Zero-Clause license",
        "Creative Commons license family",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0",
        "Do What The F*ck You Want To Public License",
        "Educational Community License v2.0",
        "Eclipse Public License 1.0",
        "Eclipse Public License 2.0",
        "European Union Public License 1.1",
        "GNU Affero General Public License v3.0",
        "GNU General Public License family",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "GNU Lesser General Public License family",
        "GNU Lesser General Public License v2.1",
        "GNU Lesser General Public License v3.0",
        "ISC",
        "LaTeX Project Public License v1.3c",
        "Microsoft Public License",
        "MIT",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "PostgreSQL License",
        "SIL Open Font License 1.1",
        "University of Illinois/NCSA Open Source License",
        "The Unlicense",
        "zLib License",
      ],
    },
    {
      type: "input",
      name: "Contributing",
      message: "who all contributed on this project?",
    },
    {
      type: "input",
      name: "test",
      message: "where any test included",
    },
    {
      type: "input",
      name: "questions",
      message: "what do i do if i have a issue?",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email ?",
    },
    {
      type: "input",
      name: "username",
      message: "what is your github username?",
    },
  ]);

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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, newFile(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
// function to initialize program
function init() {
  userInput().then((data) => writeToFile("./output/README.md", data));
}

// function call to initialize program
init();

// path needs to be the output folder where the new read me goes.

// license and badges will be tricky

// link will also be tricky
