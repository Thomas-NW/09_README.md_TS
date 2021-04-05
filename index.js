const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const path = require('path');  // I could not figure out how to generate a path for saving the README file. I hard coded the location, but would have prefered a promt to ask the user to select a storage location. Any help you can provide is appreciated....

// const writeFileAsync = util.promisify(fs.writeFile);    // util.promisify(fs.writeFile): error handling if README.md already exists. 
//                                                         // https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original : 
//                                                         // Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

const dirname = {
    sync: "createDir",  // fs.mkdir(path, model, callback) not applied! Just for testing. In this case, I believe a a synchronys create directory could be applied. 
    // fs.mkdirSync(dirname.sync,0o777)
    async: "output",   // fs.mkdiraSync(path[, model])
}

// I applied the JavaScript try/catch/finally Statement, since it was simple and does the job. What other option could I have applied?
try {
    fs.mkdir(dirname.async, (err) => {
        if (err) {
            // console.log("Error handled by catch method: " + err.message);

        } else {
            console.log(`${dirname.async} created!`);
        }
    })

} catch (err) {
    console.log(err.message);

} finally {
    console.log('Directory generated');

    const dirpath = __dirname;
    console.log(dirpath);

    const writeFileAsync = util.promisify(fs.writeFile);    // util.promisify(fs.writeFile): error handling if README.md already exists. 
    // // https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original : 
    // // Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.


    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'headline',
                message: "Enter project title",
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
                type: 'input',
                name: 'questions',
                message: 'Please send your questions to "mailto:	thomasschmidt2021@u.northwestern.edu"'
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

`## Title: ${answers.headline}

## Table of Contents
- [Description](#description)
- [Badges](#badges)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
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


## Questions
${answers.questions}


## Coding requirements
${answers.languages.join(", ")}

## Github reference 
${answers.github}


Thank you for visiting and reviewing the project. 
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
};


