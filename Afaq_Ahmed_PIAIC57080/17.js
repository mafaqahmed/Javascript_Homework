
    var names = ["Ali", "Ahmed", "Zia", "Fazeel", "Rauf"];
    names = names.map(word => word.toLowerCase())
    console.log("Here is the invitation message to all the invitees separately:");
    for(var i=0; i<names.length; i++){
        console.log("\nHy " + names[i] + ", You are invited to the dinner tomorrow @ 8:00 pm!");
    }
    
    //Question#17
    console.log("\n\n\n\nWith deep sorrow, it is informed to you that due to some issues we cannot invite all of you guyz to the dinner...")
    a = names.pop();
    console.log("Dear " + a + ", I am sorry, I cannot invite you to dinner");
    b = names.pop();
    console.log("Dear " + b + ", I am sorry, I cannot invite you to dinner");
    c = names.pop();
    console.log("Dear " + c + ", I am sorry, I cannot invite you to dinner");

    for(var i=0; i<names.length; i++){
        console.log("\nDear " + names[i] + ", You are still invited to the Dinner.");
    }
    g = names.pop();
    h = names.pop();
    console.log("\n\n\nThe array is empty compeltely... Printing the array to confirm it.\n" + names)