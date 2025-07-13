#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:abhayanandkk23@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("                                            ") + chalk.bold.hex('#ff00ff').underline("Abhay Anand"),
    subhead: chalk.bold.white("abhayanand $ ") + chalk.bold.green(" cd aboutabhay"),
    profession: `${chalk.white("Associate QA Engineer at")} ${chalk.hex("#fccc63").bold("Indus Net Technology")}`,
    instagram: chalk.gray("https://www.instagram.com/") + chalk.hex('#cd486b').bold("hashtag_abhay"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyan.bold("abhay-anand08"),
    github: chalk.gray("https://github.com/") + chalk.hex('#f5f5f5').bold("Abhay0809"),
    twitter: chalk.gray("https://twitter.com/") + chalk.hex('#00acee').bold("codo__sapien"),
    web: chalk.hex('#FF6666').bold("https://abhay-web-folio.netlify.app/"),
    npx: chalk.greenBright("npx") + " " + chalk.white.bold("abhayanand"),

    labelProfession: chalk.white.bold(" Profession:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.subhead}`,
        ``,
        `${data.labelProfession}  ${data.profession}`,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I like connecting with different people so if you want to say hi, I'll be happy to chat with you!"
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code, to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 2.5,
        float: 'center',
        padding: 2,
        borderStyle: "double",
        borderColor: "#50DBB4"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "ctrl/cmd + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());
