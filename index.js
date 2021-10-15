const inquirer = require("inquirer");
// import the fs.promises api instead of the default fs api which uses callbacks
const fs = require("fs").promises;
const generateReadme = require("generateReadme");

const questions = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "MIT",
            "ISC",
            "GNU",
            "ISC",
            "Mozilla",
            "Unlicense",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
       {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
  ]);
};

function createBadge(answers) {
    // List choices to the user with inquirer
    const gpl3 =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    const mit =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      let badge;
      if (answers.badge === "MIT") {
        badge = mit;
      } else if (answers.badge === "GPL v3") {
        badge = gpl3;
      } else {
        badge = "";
      }
      return badge;
  }
  
  function generateReadme(answers) {
   return `# Badge Demo
    
  ${createBadge(answers)}
  `;
  }
  
  module.exports = generateReadme;
inquirer.prompt(questions).then((answers) => {

    const readmeContents = generateReadme(answers)
  
    fs.writeFile("README.md", readmeContents, (err) => {
      if (err) {
        console.log(err);
        console.log(
          "Uh oh. Something went wrong. Could not create README.md. Scroll up for details."
        );
        return process.exit(1);
      }
      console.log("Success! Created README.md");
    });
  });