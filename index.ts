import inquirer from "inquirer";

let myBalance = 10000 //Dollar
let myPin = 1234

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin"
    },
])

if(pinAnswer.pin === myPin){
    console.log("Welcome to your Account")

    let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "Please Select Option",
        type: "list",
        choices: ["Withdraw", "Balance Inquiry", ]
                 
    }])

    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter Amount",
            type: "number"
        
        }]);

        myBalance -= amountAns.amount;

        console.log("Your Remaing Balance is:" + " " + myBalance )
    
    } else if(operationAns.operation === "Balance Inquiry"){
        console.log("Your Balance is:" + " " + myBalance)
    }
}
else{
    console.log("Incorrect Pin Number")};
