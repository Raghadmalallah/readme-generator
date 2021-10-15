function generateReadme(answers) {
    return `

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

    `;
  }
  
  module.exports = generateReadme;