var GitHub = require('github-api');

// basic auth
var gh = new GitHub({ token: 'fd380165f46189c1b6a5e7bdb54e10cc61f0552f' });

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
//me.listNotifications(function(err, notifications) {
//    console.log('notifications',  notifications);
//});

//me.listStarredRepos(function(err, repos) {
//    console.log(repos);
//   // look at all the starred repos!
//});
//me.getProfile(function (err, data) {
//    console.log(err,data);
//})
var issue = gh.getIssues("kun-g", "reading");
//issue.listIssues({}, function (err, data) { console.log(data); });


function createIssue(url) {
    getTitle(url, function (err, title) {
        if (err) {
            throw err
        }
        issue.createIssue({
            "title": title,
            "body": url,
            "assignees": [ "kun-g" ],
            "milestone": 1,
            //"labels": [ "bug" ]
        }, function (err, data) {
            if (err) {
                console.log(err) 
            } else {
                console.log('Created', title);
            }
        });
    });

}

function getTitle(url, cb) {
    let { get } = require('http');

    get(url, function (res) {
        const { statusCode } = res;
        if (statusCode !== 200) cb(new Error("Fail To Open"));
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            let matched = rawData.match(/<title>(.*)<\/title>/i);
            if (matched) {
                let [, title] = matched
                cb(null, title);
            } else {
                cb(new Error("No title"));
            }
        });
    });
}
let [, , url] = process.argv;
if (url) {
    createIssue(url);
}
