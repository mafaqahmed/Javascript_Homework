var username = [];

if(username == ""){
    console.log("The list is empty... We need to find some users")
}else{
    var j = 1;
console.log("Here is list of all the users:");
for(var i=0; i<username.length; i++){
    console.log("\n " + j++ + "  " + username[i]);
}

console.log("\nHere is the message to all the users separately:");
for(var i=0; i<username.length; i++){
    if(username[i] == "admin"){
        console.log("\nHello " + username[i] + ", would you like to see a status report?");
    }else {
        console.log("\nHy " + username[i] + ", thank you for logging in again.");
    }
}
}
