#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta ("***** WELLCOM TO SABA-ADVENTURE GAME *****"))
 class Player {
    name : string
    fuel:number =100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel =100 
    
    }
 }
 class Opponent {
    name : string;
    fuel:number =100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
 }
 let player = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Pleaze enter your Name",
    }
 ])
 
 let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Select your opponent",
        choices:["skeleton","Alien","Assassin","Zombie"],
    }])
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select)
do{
    //Skeleton
    if (opponent.select === "skeleton"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do?",
                choices:["Attack","Drink Portion","Run for your life..."]
            }
        ]);
        if (ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2)
        if (num > 0){
            p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);   
                if (p1.fuel <= 0){
                    console.log("You Loose, Better luck Next Time")
                    process.exit()
                }
        }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);   
            if (o1.fuel <= 0){
                console.log(chalk.bold.blueBright("EXECLLENT! YOU WIN"))
                process.exit()
            } 
    }
        }
        if (ask.opt == "Drink Portion"){
           p1.fuelincrease()
            console.log(`You drink Health portion your fuel is ${p1.fuel}`)
        }
        if (ask.opt == "Run for your life..."){
            console.log("You Loose, Better luck Next Time");
        }
        }

        //Alien
        if (opponent.select === "Alien"){
            let ask = await inquirer.prompt([
                {
                    name:"opt",
                    type:"list",
                    message:"What would you like to do?",
                    choices:["Attack","Drink Portion","Run for your life..."]
                }
            ]);
            if (ask.opt === "Attack"){
                let num = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fuelDecrease()
                    console.log(`${p1.name} fuel is ${p1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);   
                    if (p1.fuel <= 0){
                        console.log("You Loose, Better luck Next Time")
                        process.exit()
                    }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);   
                if (o1.fuel <= 0){
                    console.log(chalk.bold.redBright("EXECLLENT! YOU WIN"))
                    process.exit()
                } 
        }
            }
            if (ask.opt == "Drink Portion"){
               p1.fuelincrease()
                console.log(`You drink Health portion your fuel is ${p1.fuel}`)
            }
            if (ask.opt == "Run for your life..."){
                console.log("You Loose, Better luck Next Time");
            }
            }
        //    Assassin
        if (opponent.select === "Assassin"){
            let ask = await inquirer.prompt([
                {
                    name:"opt",
                    type:"list",
                    message:"What would you like to do?",
                    choices:["Attack","Drink Portion","Run for your life..."]
                }
            ]);
            if (ask.opt === "Attack"){
                let num = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fuelDecrease()
                    console.log(`${p1.name} fuel is ${p1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);   
                    if (p1.fuel <= 0){
                        console.log("You Loose, Better luck Next Time")
                        process.exit()
                    }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);   
                if (o1.fuel <= 0){
                    console.log(chalk.yellowBright("EXECLLENT! YOU WIN"))
                    process.exit()
                } 
        }
            }
            if (ask.opt == "Drink Portion"){
               p1.fuelincrease()
                console.log(`You drink Health portion your fuel is ${p1.fuel}`)
            }
            if (ask.opt == "Run for your life..."){
                console.log("You Loose, Better luck Next Time");
            }
            } 
        //Zombie
        if (opponent.select === "Zombie"){
            let ask = await inquirer.prompt([
                {
                    name:"opt",
                    type:"list",
                    message:"What would you like to do?",
                    choices:["Attack","Drink Portion","Run for your life..."],
                }
            ]);
            if (ask.opt === "Attack"){
                let num = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fuelDecrease()
                    console.log(`${p1.name} fuel is ${p1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);   
                    if (p1.fuel <= 0){
                        console.log(chalk.blueBright("You Loose, Better luck Next Time"))
                        process.exit()
                    }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);   
                if (o1.fuel <= 0){
                    console.log(chalk.greenBright("EXECLLENT! YOU WIN"))
                    process.exit()
                } 
        }
            }
            if (ask.opt == "Drink Portion"){
               p1.fuelincrease()
                console.log(`You drink Health portion your fuel is ${p1.fuel}`)
            }
            if (ask.opt == "Run for your life..."){
                console.log(chalk.greenBright("You Loose, Better luck Next Time"));
            }
            } 
    }
while (true)