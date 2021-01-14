function generateReadMe(data) {
  return `
  # ${data.title}

  ## ${data.description}
  ---
  ## ${data.installation}

  `;
}

module.exports = generateReadMe;
