function show_magicians(magicians){
    console.log("\nHere are the magicians names:")
    var j=1;
    for(var i=0; i<magicians.length; i++){
        console.log("\n " + j++ + ":  " + magicians[i])
    }
}

var names = ["ali", "usman", "haider"];
show_magicians(names);