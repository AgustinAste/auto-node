const nodeCron = require("node-cron");
const fs = require("fs");
const moment = require("moment");
const simpleGit = require('simple-git');









const makeChangesToFile = (content) => {
    console.log("content", content)
    fs.appendFileSync('./changes.txt', content
        // , (err, data) => {
        //     if (err) {
        //         console.error(err)
        //         return
        //     }
        //file written successfully
        // }
    )

}
const pushChangesToGit = async(msg) => {

    // simpleGit({
    //         config: [
    //             `Authorization: token aPjndr15me8hacYaiQ+lWrMv0eeXce9eWn4UX3VkuHg`
    //         ]
    //     })
    //     .init()
    //     .add('.')
    //     .addConfig('user.name', 'Agustin')
    //     .addConfig('user.email', 'aste.agustin@gmail.com')
    //     .commit(msg)
    //     .addRemote('origin', 'https://github.com/AgustinAste/auto-node.git')
    //     .addRemote('origin', 'some-repo-url')
    //     .push(['-u']);
    require('child_process').execFile('git', ['commit', '-m', msg]);
    require('child_process').execFile('git', ['push', '-f']);
    require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');
    // require('child_process').execFile('agustin');


}

// will run the task at 1:05:30pm every day
// const job = nodeCron.schedule("30 5 13 * * *", function jobYouNeedToExecute() {
// Do whatever you want in here. Send email, Make  database backup or download data.
let ammount_of_commits = Math.floor(Math.random() * 10);
console.log('ammount_of_commits', ammount_of_commits)
for (let i = 0; i < ammount_of_commits; i++) {
    let date_now = moment().format('D-M-Y H:MM:SS')

    let file_content = '\n' + date_now + " " + i;
    makeChangesToFile(file_content);

    pushChangesToGit(i + ' commit for date ' + date_now);

}
// });