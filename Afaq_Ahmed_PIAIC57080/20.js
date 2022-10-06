var names = [];
var n = 1;

var a = "Japan";
var b = "Germany";
var c = "Pakistan";
var d = "India";

names.push(a);
names.push(b);
names.push(c);
names.push(d);

console.log("\nHere is the prepared list");
for(var i=0; i<names.length; i++){
    console.log("\n" + n++ + ":" + names[i]);
}