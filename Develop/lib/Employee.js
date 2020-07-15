// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

//Inquire person's information
inquirer
.prompt([
    {
    type: "input",
    message: "Enter your manager's name",
    name: "manager"
    }
])