const nodeCron = require("node-cron");
const fs = require("fs");
const moment = require("moment");
const simpleGit = require('simple-git');









const makeChangesToFile = (content) => {
    console.log("content", content)
    fs.appendFile('./changes.txt', content, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })

}
const pushChangesToGit = async(msg) => {
    console.log("committing on git");
    simpleGit()
        .init()
        .add('./*')
        .addConfig('user.name', 'Agustin')
        .addConfig('user.email', 'aste.agustin@gmail.com')
        .commit(msg)
        .addRemote('origin', 'https://github.com/AgustinAste/auto-py-commits.git')
        .push('origin', 'master');
    console.log("ended committing on git");

}

// will run the task at 1:05:30pm every day
// const job = nodeCron.schedule("30 5 13 * * *", function jobYouNeedToExecute() {
// Do whatever you want in here. Send email, Make  database backup or download data.
let ammount_of_commits = 1 // Math.floor(Math.random() * 10);
console.log('ammount_of_commits', ammount_of_commits)
for (let i = 0; i < ammount_of_commits; i++) {
    let date_now = moment().format('D-M-Y H:M:S')

    let file_content = '\n' + date_now + " " + i;
    makeChangesToFile(file_content);

    pushChangesToGit(i + ' commit for date ' + date_now);

}
// });