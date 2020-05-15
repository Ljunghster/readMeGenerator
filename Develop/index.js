const axios = require('axios')
const inquirer = require('inquirer')
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'comments',
        message: 'Any comments on your purchase experience?',
        default: 'Nope, all good!'
      }
];

function writeToFile(fileName, data) {
    fs.writeFile(filename, data)
}


function init() {
    inquirer.prompt(questions).then(answers => {

        console.log(JSON.stringify(answers, null, '  '));
      });
}

init();












// axios({
    //     method: "get",
    // url: `https://api.github.com/users/${username}/repos`,
    // headers: {
    //     Authorization: 'Bearer ${githubToken}',
    //     "Content-Type": "application/json"
    // },
    // auth: {
    //     username: 'user',
    //     password: 'password'
    // }
    // })
    // .then()