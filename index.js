const nodeCron = require("node-cron");
const fs = require("fs");
const moment = require("moment");

const makeChangesToFile = (content) => {
    console.log("content", content)
    fs.appendFile('./changes.txt', content, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log("data", data)
            //file written successfully
    })

}
const pushChangesToGit = () => {
    await git.cwd({ path: 'content' }).commit('test commit');

}

// will run the task at 1:05:30pm every day
const job = nodeCron.schedule("30 5 13 * * *", function jobYouNeedToExecute() {
    // Do whatever you want in here. Send email, Make  database backup or download data.
    let ammount_of_commits = Math.floor(Math.random() * 10);
    console.log('ammount_of_commits', ammount_of_commits)
    for (let i = 0; i < ammount_of_commits; i++) {
        let date_now = moment().format('D-M-Y H:M:S')

        let file_content = '\n' + date_now + " " + i;
        makeChangesToFile(file_content);
        pushChangesToGit();

    }
});