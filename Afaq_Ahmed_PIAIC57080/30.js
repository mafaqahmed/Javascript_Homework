var username = ["ali", "usman", "admin", "haider", "rauf"];

console.log("\nHere is the message to all the users separately:");
for(var i=0; i<username.length; i++){
    if(username[i] == "admin"){
        console.log("\nHello " + username[i] + ", would you like to see a status report?");
    }else {
        console.log("\nHy " + username[i] + ", thank you for logging in again.");
    }
}