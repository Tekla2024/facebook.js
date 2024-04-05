var database = [
        {
                username: "tekla",
                password: "superSecret"
        }
];
var newsFeed = [
        {
                username: "Tebe",
                timeline: "so happy!"
        },
        {
                username: "Ann",
                timelines: "witches don't age!"
        }
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function singIn(user,pass) {
        if(user === database[0].username && pass === database[0].password){
                console.log(newsFeed);

        }else{
                alert("Sorry, wrong username and password!");
        }

}
singIn(userNamePrompt, passwordPrompt);