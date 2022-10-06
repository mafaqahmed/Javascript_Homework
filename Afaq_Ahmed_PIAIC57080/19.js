var names = ["Ali", "Ahmed", "Zia"];

console.log("Here is the invitation message to all the invitees separately:");
for(var i=0; i<names.length; i++){
    console.log("\nHy " + names[i] + ", You are invited to the dinner tomorrow @ 8:00 pm!");
}
console.log("\nTotal number of persons invited to the dinner are " + names.length)