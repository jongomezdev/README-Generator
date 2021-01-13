const generateReadMe = (answers) =>
  `
  # ${answers.title}

  ## ${answers.description}
  ---
  ## ${answers.installation}

  `;

module.exports = generateReadMe;
