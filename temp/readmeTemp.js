function newFile(data) {
  const licenseBadge = "";
  if (data.license) {
    licenseBadge = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})\n\n`;
  }
  const readMe = `
      # ${data.title}

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
     ${data.contributing}

     ## License
     ${licenseBadge}
     ${data.license}

     ## Features


## Tests
${data.test}

## Questions
  Any questions about this project please send me a message on https://github.com/${data.username} or email me at [${data.email}](mailto:${data.email})
  
`;
  return readMe;
}

module.exports = newFile;
