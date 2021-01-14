// Require Modules
const fs = require("fs");
const inquirer = require("inquirer");
const $license = require("./components/license");

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
      choices: ["Apache", "GNU", "MIT"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "Describe the guidelines for contributing to this repo: ",
      name: "contributing",
    },
  ])
  .then((data) => {
    // Callback
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
${$license[license].badge}
  
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

${$license[license].notice}

---

## Contributing

${contributing}
  
`;
    fs.writeFile("README.md", generateReadMe, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
