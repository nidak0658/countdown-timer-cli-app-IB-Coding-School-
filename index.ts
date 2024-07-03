#! /usr/bin/env node

import inquirer from "inquirer";

let userInput = await inquirer.prompt([
  {
    type: 'number',
    name: 'seconds',
    message: "Enter countdown durations in seconds!"
  }
]);

let {seconds} = userInput;

if(seconds != 0){
  console.log(`Starting countdown for ${seconds} seconds....`);
  startCountdownFun(seconds);

}else{
  console.log(`Please enter a number greater than 0`)
}

function startCountdownFun(seconds:number){
  const currentTime = Date.now();  // print time is milliseconds from 1 Jan 1979;

  let userenteredTime = seconds * 1000  // convert into milliseconds

  let totalTime = currentTime + userenteredTime;

  // setInterval
  const timer = setInterval(()=>{
    let currentTime = Date.now();
    const remainingTime = totalTime - currentTime

    if(remainingTime >= 0){
      process.stdout.write(`\rTime remaining ${Math.floor(remainingTime / 1000)} seconds`)

    }else{
      clearInterval(timer);
      console.log(`\nTime Up!`);
      console.log(`Thank you for using our Countdown Timer App!`);
    }

  }, 1000);
}