//Exercise Array
//Question1
var staples = ["chicken", "cheese", "milk", "eggs", "fish", "cereal", "apples", "onions", "bread", "potatoes"];
staples.forEach(function(value, index){
console.log(value, index);
});
//Question2
var list = "Jamilla";
var wordLength=list.length;
for (i=0; i< wordLength; i++){
console.log(list[i]);
}
//Question3
console.log(list.toUpperCase());
//Exercise Array2

var inventory = [
    ["brush", 3],
    ["comb", 2],
    ["hair color", 4],
    ["hair spray", 5]
];
inventory.forEach(function(userInput, value){
    if (userInput <= inventory.length) {
        console.log(item-=1);
    }else{
        console.log("out of stock");
    }
});