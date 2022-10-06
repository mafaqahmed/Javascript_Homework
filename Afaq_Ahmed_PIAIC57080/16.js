
    var names = ["Ali", "Ahmed", "Zia", "Fazeel", "Rauf"];
    names = names.map(word => word.toLowerCase())
    console.log("Here is the invitation message to all the invitees separately:");
    for(var i=0; i<names.length; i++){
        console.log("\nHy " + names[i] + ", hope you are fine... You are invited to the dinner tomorrow @ 8:00 pm!");
    }
    
    console.log("\nBecause of some amendments now we can invite three more people! Here are the persons we invited:\nArif\nAzka\nZeeshan\n");
    
    names.splice(0,0,"Arif");
    names.splice(3,0,"Azka");
    names.push("Zeeshan");
    
    console.log("\nHere is the invitation message to all the invitees separately:");
    for(var i=0; i<names.length; i++){
        console.log("\nHy " + names[i] + ", hope you are fine... You are invited to the dinner tomorrow @ 8:00 pm!");
    }