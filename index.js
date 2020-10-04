//node imports
'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
var questions = [{
        type: "input",
        name: "title",
        message: "What is the name of your project repo?"
    },
    {
        type: "input",
        name: "desc",
        message: "Enter a description for your project"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "use",
        message: "How do you use your project?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What contribution guidelines should you follow?"
    },
    {
        type: "input",
        name: "test",
        message: "How do you test your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",
        choices: ['GNU General Public License', 'MIT License', 'Apache License', 'Ms-PL License', 'Berkeley Software Distribution']
    },
    {
        type: "input",
        name: "github",
        message: "What is yout Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: function (value) {
            var pass = value.match(`[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`);
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid email address';
          },
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;

        console.log('README complete! Check out output/README.md to see the output!');
    })
}
var data;

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(JSON.stringify(answers, null, '  '));
            data = answers;
            var output = generateMarkdown(data);
            console.log(output)
            writeToFile('output/README.md', output);
        });
}

// function call to initialize programinit()
init();