const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require("generateReadMe");

const promptUser = () =>
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
  ]);

promptUser()
  .then((answers) => writeFileAsync("README.md", generateReadMe(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));
