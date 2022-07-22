const generateHTML = require('./util/generateHtml');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const inquirer = require('inquirer')
const fs = require('fs');

const addManager = ()=>{
    return inquirer.prompt (
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
            name: "name",
            message: "What is the team manager's id?",
            type: "input"
        },
        {
            name: "name",
            message: "What is the team manager's id?",
            type: "input"
        },
    )
}
    then(answers => {
    fs.writeFile(`./output/team-${answers.Manager.name}.html`, generateHTML, (err) => err ? console.error(err) : console.log('Member Added!'));
})
