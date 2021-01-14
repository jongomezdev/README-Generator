// Require Modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require("./components/generateReadMe");

// Command line prompts
const questions = [
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please type a brief description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
  ]),
];

// function to write user response to README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, function (err) {
    err ? console.log(err) : console.log("File was successfully created!");
  });
}

// .then((answers) => fs.writeFile("README.md", generateReadMe(answers)))
// .then(() => console.log("Successfully wrote to README.md"))
// .catch((err) => console.error(err));

// fs.writeFile("README.md", generateReadMe, (err) =>
//   err ? console.log(err) : console.log("Success!")
// );
