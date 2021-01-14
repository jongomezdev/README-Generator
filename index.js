// Require Modules
const fs = require("fs");
const inquirer = require("inquirer");
// const generateReadMe = require("./components/generateReadMe");

// Command line prompts

inquirer
  .prompt([
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
      message: "Let users know how to install your project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for the project: ",
      name: "license",
      choices: ["Apache", "GNU GPLv3", "MIT"],
    },
    {
      type: "input",
      message: "Describe the guidelines for contributing to this repo: ",
      name: "contributing",
    },
  ])
  .then((data) => {
    const {
      title,
      description,
      installation,
      usage,
      license,
      contributing,
    } = data;
    const generateReadMe = `
# ${title}
  
## Description
  
${description}
  
---
## Installation
    
${installation}
---

## Usage

${usage}

---

## License

${license}

---

## Contributing

${contributing}
  
`;
    fs.writeFile("README.md", generateReadMe, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// function to write user input to readme file

// function writeToFile(filename, data) {
//   console.log("Success!");
//   return fs.writeFile(filename, data);
// }
