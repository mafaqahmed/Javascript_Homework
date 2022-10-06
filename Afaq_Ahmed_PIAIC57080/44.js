function sandwich_items(items){
    console.log("\nHere are the items that must be in the sandwich:")
    var j=1;
    for(var i=0; i<items.length; i++){
        console.log("\n " + j++ + "  " + items[i])
    }
}

var a = ["Onion", "Tomato", "Beef"];
var b = ["Cheez","Mayonnaise", "Chicken", "Tomato"];
var c = ["Avocado", "Olives", "Beef", "Mustard Sauce", "Garlic Sauce"];

sandwich_items(a);
sandwich_items(b);
sandwich_items(c);