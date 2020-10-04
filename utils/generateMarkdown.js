// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badmath](https://img.shields.io/github/license/${data.github}/${data.title})
  
  ## Description 
  
  ${data.desc}
  
  
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribting](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.install}
  
  
  ## Usage 
  
  ${data.use}
  
  
  ## Contributing

  ${data.contribute}
  
  
  ## Tests

  ${data.test}
  
  
  ## Credits

  ${data.credits}
  
  
  ## License
  
  ${data.license}


  ## Questions

  For additional questions, fing my github page [here](https://github.com/${data.github}/), or email me at <${data.email}>
  `;
}

module.exports = generateMarkdown;
