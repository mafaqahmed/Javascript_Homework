function show_magicians(magicians){
    console.log("\nHere are the magicians names:")
    var j=1;
    for(var i=0; i<magicians.length; i++){
        console.log("\n " + j++ + "  " + magicians[i])
    }
}

function make_great(magician_names){
    var a = []
    for(var i=0; i<magician_names.length; i++){
        a.push("The Great " + magician_names[i])
    }
    return(a)
}


var names = ["ali", "usman", "haider"];


great_names = make_great(names);

show_magicians(names);
show_magicians(great_names);
