
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
            name: 'date',
            message: "Please enter today's date (MM/DD/YYYY)",
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'scope',
            message: 'Please outlined the scope of the project:?',
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
# 09 Node.js Homework: Professional README Generator

## Table of Content

[Installation](#installation)
[License](#license)


Date: ${answers.date}
Developer Name: ${answers.name}

Location: ${answers.location}

Please outlined the scope of the project: ${answers.scope}

Please check all languages you applied:  ${answers.languages.join(", ")}

GitHub username is ${answers.github}

h

## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges

![github license](https://img.shields.io/badge/license-MIT-blue.svg);


h

h

h

h

h

h

h

h

h
h

h

h

h

h

h

h

h
h

h

h

h

h

h

h

h

h

h

h

h

h

h

h

h



## Installation

Follow these instructions 

What is the project name: ${answers.scope}



`;


// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err));
};

init();





    // fucction genMarkDown(answers) {
    //     return
    //     `# ${answer.nameInput}
    // `
    // }

