function newFile(data) {
  let licenseBadge = "";
  if (data.License) {
    (data.License = data.License.split(" ").join("_")),
      console.log(data.License);
    licenseBadge = `[![License: ${data.Licensecense}](https://img.shields.io/badge/License-${data.License}-brightgreen.svg)](https://opensource.org/licenses/${data.License})\n\n`;
  }
  let Badge = "";
  if (data.javascript,data.html,data.css) {
    // (data.License = data.License.split(" ").join("_")),
      console.log(data);
    Badge = `![JavaScript:](https://img.shields.io/badge/JavaScript-${data.javascript}%25-blue)
             ![HTML:](https://img.shields.io/badge/HTML-${data.html}%25-red)
             ![CSS:](https://img.shields.io/badge/CSS-${data.css}%25-purple)`

  }
  

  const readMe = `
# ${data.title}
${Badge}
## Description

 ${data.description}

## Table of Contents
*[Title](#title)

*[Description](#description)
    
*[Installation](#installation)
    
*[Usage](#usage)
    
*[License](#license)
    
*[Contributors](#contributor)
    
*[Tests](#test)
    
*[Questions](#questions)

*[URL](#URL)
    

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors
${data.Contributing}

## License
${licenseBadge}
${data.License}

## badges

${Badge}

## Tests
${data.test}

## Questions
Any questions about this project please send me a message on *https://github.com/${data.username} or email me at [${data.email}]

## URL
  


## Screenshots

`;
  return readMe;
}

module.exports = newFile;
