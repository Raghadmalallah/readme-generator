// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utilsreadme/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
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
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "GNU",
                "ISC",
                "MIT",
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
} 


  init();  

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
  