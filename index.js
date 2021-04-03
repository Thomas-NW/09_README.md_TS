
// The application will be invoked by using the following command:

// ```bash
// node index.js
// ```



const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const path = require('path');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'headline',
            message: "Your-Project-Title",
        },
        {
            type: 'input',
            name: 'description',
            message: "Descripe your project",
        },
        {
            type: 'input',
            name: 'badges',
            message: "Badges: Add badge images that convey metadata, such as whether or not all the tests are passing for the project.",
        },
        {
            type: 'input',
            name: 'license',
            message: "License: Let other developers know what they can and cannot do with your project.",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Installation: Outline installation requirements for this project",
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: Reference user examples liberally, and show the expected output if you can.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contributing: I am open to contributions. Tell people what your requirements are for accepting them.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests: Tell what testing was done to the app for functionality and validations.',
        },
        {
            type: "checkbox",
            name: "languages",
            message: "Please check all languages you applied: ",
            choices: ["HTML 5.0", "CSS", "JavaScript", "jQuery", "json", "Bootstrap"],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },

        ]);
};


const generateREADME = (answers) =>

`
# ${answers.headline}

## Table of Contents
- [Description](#description)
- [Badges](#badges)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Coding requriements](#languages)
- [Github reference](#github)



## Description

🔍 ${answers.description}

## Badges
🏆 ${answers.badges}
![github license](https://img.shields.io/badge/license-MIT-blue.svg);

## License
${answers.license}

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Coding requirements
${answers.languages.join(", ")}

## Github reference 
${answers.github}

---


`;


// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err));
};

init();


// // Bonus using writeFileAsync as a promise
// const init = () => {
//     promptUser()
//       .then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
//       .then(() => console.log('Successfully wrote README.md'))
//       .catch((err) => console.error(err));
//   };
  
//   init();



    // fucction genMarkDown(answers) {
    //     return
    //     `# ${answer.nameInput}
    // `
    // }

