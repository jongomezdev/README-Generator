const fs = require("fs");
const inquirer = require("inquirer");

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

const generateReadMe = (answers) =>
  `
  # ${answers.title}

  ## ${answers.description}
  ---
  ## ${answers.installation}

  `;
