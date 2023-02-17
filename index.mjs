import inquirer from 'inquirer';
import fs from "fs/promises";

let {readmetitle, readmebio, installation, usage, tests, credits, licensing, contributions, questions} = await inquirer
.prompt([
    {
        type: 'input',
        name: 'readmetitle',
        message: 'what is your read me title?',
    },
    {
        type: "input",
        name: 'readmebio',
        message: 'write a description:'
    },
    {
        type: "input",
        name: 'installation',
        message: 'write about how someone can install and run the project:'
    },
    {
        type: "input",
        name: 'usage',
        message: 'how do you use your project?'
    },
    {
        type: "input",
        name: 'tests',
        message: 'tell the person about the tests your project has undergone:'
    },
    {
        type: "input",
        name: 'credits',
        message: 'who do you need to credit?'
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'what kind of license do you require?',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'ISC License'],
    },
    {
        type: "input",
        name: 'contributions',
        message: 'tell the person what they need to do if they would like to contribute to your project:'
    },
    {
        type: "input",
        name: 'questions',
        message: 'tell the person what they need to do if they have questions'
    },

])

let readmeinput = 
`#Project Title
${readmetitle}

## Description
${readmebio}

## Installation 
${installation}

## Usage 
${usage}

## Tests
${tests}

## Credits
${credits} 

## Licensing 
${generateLicense(licensing)}

## Contributions
${contributions}

## Questions
${questions}
`

await fs.writeFile("README.md", readmeinput)

function generateLicense(licensing){
    if (licensing === 'MIT License'){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else (licensing === 'Mozilla Public License 2.0'); {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
};

//MIT License', 'Mozilla Public License 2.0', 'ISC License'

console.log(readmetitle, readmebio, installation, usage, tests, credits, licensing, contributions, questions);