a = "afaQ ahmed ariF raUf zaRnab Ali naeem";
a = a.toUpperCase();
console.log("Your name in upper case is " + a);
a = a.toLowerCase();
console.log("Your name in lower case is " + a);
b = a.split(" ");
c = b.map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase())
c = c.join(" ")
console.log("Your name in title case is " + c);