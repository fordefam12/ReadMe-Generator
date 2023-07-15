function newFile(data) {
    const licenseBadge = "";
    if (data.license) {
        
        licenseBadge = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})\n\n`;
      }
}