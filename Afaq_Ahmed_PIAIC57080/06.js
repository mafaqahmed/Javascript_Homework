a = "Afaq Ahmed";
b = a.split(" ");
b.splice(0,0,"\n\n\t\t\t");
b.splice(b.length,0,"\t\t\t");
var c = b.join(" ");
console.log("Name with spaces is " + c);
console.log("\nReal input name was " + a);