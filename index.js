#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your Account");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
        },
    ]);
    if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please Select Option",
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
            },
        ]);
        if (fastCashAns.fastCash === "500") {
            console.log(("Your Remaing Balance is:" + " " + [myBalance = myBalance - 500]));
        }
        else if (fastCashAns.fastCash === "1000") {
            console.log(("Your Remaing Balance is:" + " " + [myBalance = myBalance - 1000]));
        }
        else if (fastCashAns.fastCash === "2000") {
            console.log(("Your Remaing Balance is:" + " " + [myBalance = myBalance - 2000]));
        }
        else if (fastCashAns.fastCash === "5000") {
            console.log(("Your Remaing Balance is:" + " " + [myBalance = myBalance - 5000]));
        }
    }
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (amountAns.amount <= 0) {
            console.log("Invalid Amount");
        }
        else {
            myBalance = myBalance - amountAns.amount;
        }
        console.log("Your Remaing Balance is:" + " " + myBalance);
    }
    else if (operationAns.operation === "Balance Inquiry") {
        console.log("Your Balance is:" + " " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number");
}
