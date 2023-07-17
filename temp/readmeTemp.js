function newFile(data) {
  let licenseBadge = "";
  if (data.License) {
    (data.License = data.License.split(" ").join("_")),
      console.log(data.License);
    licenseBadge = `[![License: ${data.Licensecense}](https://img.shields.io/badge/License-${data.License}-brightgreen.svg)](https://opensource.org/licenses/${data.License})\n\n`;
  }
  console.log(licenseBadge)

  const readMe = `
# ${data.title}
${licenseBadge}
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
    

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors
${data.Contributing}

## License
${licenseBadge}
${data.License}

## Tests
${data.test}

## Questions
Any questions about this project please send me a message onhttps://github.com/${data.username} or email me at [${data.email}]
  
`;
  return readMe;
}

module.exports = newFile;
