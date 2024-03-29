#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What in want to add your Todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add More ?",
            default: "false",
        },
    ]);
    todo.push(addTask.todo);
    condition = addTask.todo;
    console.log(todo);
}
