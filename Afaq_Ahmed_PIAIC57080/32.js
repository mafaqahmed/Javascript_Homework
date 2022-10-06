var current_ = ["raza", "ali", "usman", "haider", "rauf"];
var new_ = ["Raza", "Zaeem", "Afaq", "haider", "Rauf"];

current_ = current_.map(word => word.toLowerCase())
new_ = new_.map(word => word.toLowerCase())

for(var i=0; i<new_.length; i++){
    if(current_.includes(new_[i])){
        console.log("\nHi " +  new_[i] + " Please enter new username");
    }else{
        console.log("\nHi " +  new_[i] + " username is avaiable");
    }
}