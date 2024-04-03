import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 2255;

let pinAnswer =  await inquirer.prompt(
[
    {
name: "pin",
message: "enter your pin",
type: "number"

}

]
    )

if (pinAnswer.pin === myPin) {
    console.log("correct pin code")
}else {
    console.log("incorrect pin number")
}

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices:["withdraw", "check balance", "fastcash"]
        }
    ]
)


if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]
    )
if(amountAns.amount > myBalance)
{
    console.log("you have insufficient balance");}
    else if (myBalance -= amountAns.amount) {
        console.log('your remaining balance is : ${myBalance}');
    }
}else if(operationAns.operation === "check balance"){
    console.log('your balance is:${myBalance}');
}else if (operationAns.operation === "fastcash"){
    let fastcash =await inquirer.prompt(
        [
            {
                name: "cash",
                message: "select your amount",
                type: "list",
                choices:["1000","2000","5000","7000"]
    
            }
        ]);
myBalance -= fastcash.cash
console.log('your remaining balance is ${myBalance}');

    }
