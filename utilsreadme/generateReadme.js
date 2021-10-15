function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
## Installation
 ${answers.installation}
## Usage
 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
 ${answers.contributing}
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
 Email me with any questions: ${answers.email}<br /><br />
    `;
}

module.exports = generateReadme;
