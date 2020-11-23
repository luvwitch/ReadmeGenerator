//array of questions for user:
//Description, Table of Contents, Installation, Usage, License, Contributing, 
//Tests, and Questions
//multiple sections for each response
//set title of project as title of readme
//choose a license for application from a list of options & add a
//badge for that license near the top of the README
// WHEN the GitHub username is enteres
// THEN this is added to the section of the README entitled Questions, with a link to the users GitHub profile
// WHEN an email address is submitted
// THEN this is added to the section of the README entitled Questions, with instructions on how to contact the user


const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
    {
        type: 'input',
        message: "What is the name of your project?",
        name: 'title',

    },
    {    
        type: 'input',
        message: "What is a brief description of your project?",
        name: 'description',

    },
    {
        type: 'input',
        name: 'installation',
        message: "What needs to be installed to run your code?",

    },
    {
        type: 'input',
        message: "What is this project used for?",
        name: 'usage',

    },
    {
        type:'list',
        name: 'license',  
        message: 'Which license are you using?',
        choices: ['Apache-License-2.0', 'MIT-License', 'Mozillar-Public-License-2.0', 'GNU-Public-License'],
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?",
    
    },
    {
        type: 'input',
        name: 'tests',
        message: "What tests should be run to check for errors?",
    
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username?",
    
    },    
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    
    },

]).then((response)=> {
    const title = response.title.split(" ").join("-");
    fs.writeFile(`${title}-README.md`, `# ${response.title}
![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
${response.description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)
    
## Installation

To run the application please install:

${response.installation}

## Usage
    
${response.usage}
    
## License
    
This application is covered under the ${response.license} license.
    
## Contributing
    
${response.contributing}
    
## Tests
    
${response.tests}
    
## Questions

View my GitHub profile at:
https://github.com/${response.github}
    
Questions? Email me at:
${response.email}`, (err)=>    
    err ? console.log(err) : console.log("Success"))

console.log(response);
});

