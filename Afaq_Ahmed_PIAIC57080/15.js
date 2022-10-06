
    var names = ["Ali", "Ahmed", "Zia", "Fazeel", "Rauf"];
names = names.map(word => word.toLowerCase())
console.log("Here is the invitation message to all the invitees separately:");
for(var i=0; i<names.length; i++){
    console.log("\nHy " + names[i] + ", hope you are fine... You are invited to the dinner tomorrow @ 8:00 pm!");
}

//1st Part
var o = 1;
var no_names = ["Ali", "Zia"]
no_names = no_names.map(word => word.toLowerCase())
console.log("\nHere is list of persons that cannot come tomorrow for the dinner..." );
for(var i=0; i<no_names.length; i++){
    console.log("\n" + o++ + "\t" + no_names[i]);
}

//2nd Part
o = 1;
var new_names = ["Zafar", "Qasim"]
console.log("\nHere is list of persons that are invited instead of them..." );
for(var i=0; i<new_names.length; i++){
    console.log("\n" + o++ + "\t" + new_names[i]);
}
new_names = new_names.map(word => word.toLowerCase())
j = 0;
for(var i=0; i<names.length; i++){
    for (var k=0; k<no_names.length; k++){
        if(names[i] == no_names[k]){
            names.splice(i,1,new_names[j++]);
        }
    }
}

//3rd Part
console.log("\nHere are the invites to the new list of persons..." );
for(var i=0; i<names.length; i++){
    console.log("\nHy " + names[i] + ", hope you are fine... You are invited to the dinner tomorrow @ 8:00 pm!");
}