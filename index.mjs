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
        type: "input",
        name: 'licensing',
        message: 'what kind of license do you require?'
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
${licensing}

## Contributions
${contributions}

## Questions
${questions}
`

fs.writeFile("README.md", readmeinput)
console.log(readmetitle, readmebio, installation, usage, tests, credits, licensing, contributions, questions);