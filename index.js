const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')
const teamMembers = [];

init();

function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: `Welcome to the Team Webpage Generator! Please select to generate a manager or quit.`,
            choices: [`Create manager`, `Quit`],
            name: `entry`
        },
    ]).then((response) => {
        if (response.entry === `Quit`) {
            console.log(`Thank you for visiting the Team Webpage Generator. Have a nice day!`)
        }else {
            addManager();
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: `input`,
            message: `What is the manager's name?`,
            name: `name`,
        },
        {
            type: `number`,
            message: `What is the manager's ID?`,
            name: `id`,
        },
        {
            type: `email`,
            message: `What is the manager's email?`,
            name: `email`,
        },
        {
            type: `input`,
            message: `What is the manager's office number?`,
            name: `officeNumber`,
        }
    ]).then((response) => {
        const teamManager = new Manager(`${response.name}`, response.id, `${response.email}`, response.officeNumber);
        teamMembers.push(teamManager);
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: `list`,
            message: `Do you wish to add a team member?`,
            choices: [`Add engineer`, `Add intern`, `Quit`],
            name: `whatNext`
        }
    ]).then((response) => {
        if(response.whatNext === `Add engineer`) {
            addEngineer();
        }else if(response.whatNext === `Add intern`) {
            addIntern();
        }else {
            writeFile();
            console.log(`Thank you for utilizing the Team Webpage Generator. Have a nice day!`);
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: `input`,
            message: `What is the engineer's name?`,
            name: `name`,
        },
        {
            type: `number`,
            message: `What is the engineer's ID?`,
            name: `id`,
        },
        {
            type: `email`,
            message: `What is the engineer's email?`,
            name: `email`,
        },
        {
            type: `input`,
            message: `What is the engineer's github account name?`,
            name: `github`,
        }
    ]).then((response) => {
        const teamEngineer = new Engineer(`${response.name}`, response.id, `${response.email}`, `${response.github}`);
        teamMembers.push(teamEngineer);
        addTeamMember();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: `input`,
            message: `What is the intern's name?`,
            name: `name`,
        },
        {
            type: `number`,
            message: `What is the intern's ID?`,
            name: `id`,
        },
        {
            type: `email`,
            message: `What is the intern's email?`,
            name: `email`,
        },
        {
            type: `input`,
            message: `What university is/was the intern enrolled at?`,
            name: `university`,
        }
    ]).then((response) => {
        const teamIntern = new Intern(`${response.name}`, response.id, `${response.email}`, `${response.university}`);
        teamMembers.push(teamIntern);
        addTeamMember();
    })
}

function writeFile() {
    fs.writeFile(`index.html`, generateHtml(teamMembers), (err) => err ? console.log(err):console.log('A new file named index.html has been generated in your working directory!.'));
}
