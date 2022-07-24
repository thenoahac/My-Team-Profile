const generateHTML = require('./util/generateHtml');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const inquirer = require('inquirer')
const path = require('path');
const fs = require('fs');

const teamMembers = [];

const addManager = () => {
     inquirer.prompt ([
        {
            name: "name",
            message: "What is the team manager's name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is the team manager's id?",
            type: "input"
        },
        {
            name: "email",
            message: "What is the team manager's email address?",
            type: "input"
        },
        {
            name: "officeNum",
            message: "What is the team manager's office number?",
            type: "input"
        },
    ]).then((responses) => {
        var manager = new Manager(responses.name, responses.id, responses.email, responses.officeNum);
        teamMembers.push(manager)
        teamMenu();
    })
}

function teamMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Finalize Team'],
            name: 'teamMenu'
        }
    ]).then((answers) => {
        if (answers.teamMenu == 'Add Engineer') {
            addEngineer();
        } else if (answers.teamMenu == 'Add Intern') {
            addIntern();
        } else {
            finalizeTeam();
        }
    })
}

const addEngineer = () => {
    inquirer.prompt ([
       {
           name: "name",
           message: "What is the Engineers name?",
           type: "input"
       },
       {
           name: "id",
           message: "What is the Engineer's id?",
           type: "input"
       },
       {
           name: "email",
           message: "What is the Engineer's email address?",
           type: "input"
       },
       {
           name: "github",
           message: "What is the Engineer's github?",
           type: "input"
       },
   ]).then((responses) => {
       var engineer = new Engineer(responses.name, responses.id, responses.email, responses.github);
       teamMembers.push(engineer)
       teamMenu();
   })
}

const addIntern = () => {
    inquirer.prompt ([
       {
           name: "name",
           message: "What is the Intern's name?",
           type: "input"
       },
       {
           name: "id",
           message: "What is the Intern's id?",
           type: "input"
       },
       {
           name: "email",
           message: "What is the Intern's email address?",
           type: "input"
       },
       {
           name: "school",
           message: "What school does this Intern attend?",
           type: "input"
       },
   ]).then((responses) => {
       var intern = new Intern(responses.name, responses.id, responses.email, responses.school);
       teamMembers.push(intern)
       teamMenu();
   })
}

function finalizeTeam () {
    var outputFolder = path.resolve(__dirname, "output")
    var outputFile = path.join(outputFolder, "team.html")
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder)
    }
    fs.writeFileSync(outputFile, generateHTML(teamMembers))
    console.log("Team has been created!")
}

addManager();