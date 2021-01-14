// Require Modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require("./components/generateReadMe");

// Command line prompts
const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please type a brief description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
  ]),
];
