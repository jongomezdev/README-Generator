const generateReadMe = (data) =>
  `
  # ${data.title}

  ## ${data.description}
  ---
  ## ${data.installation}

  `;

module.exports = generateReadMe;
