// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generatemarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Why did you build this project and what problems does it solve?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install you project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project? Provide instructions and examples for use.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test your project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is the link to your GitHub profile?'
  },
  {
    type: 'list',
    message: 'What license did you use if any?',
    name: 'license',
    choices: ['MIT', 'Apache', 'GNU', 'MPL', 'AGPL', 'none'],
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log('Success!')
  );
};

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions)
    .then((data) => {
      writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app

init();