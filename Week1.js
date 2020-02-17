//Exercise Datatypes
//Question 1
var first = "Hello my name is Jamilla";
var second = " and this is Javascript.. Yayy! lol"
console.log(first + second);
//Question 2
var age = 39;
console.log(first + age);
//Question 3
console.log(first * age);
while (age < 39){
console.log("Your age is less than 45");
age++;
}
//Bonus
console.log(2+true);

// Exercise Conditional
//Question 1
var countThis = 2;
console.log(countThis + 5);
console.log(countThis * 2);
var countThisReturned = 7;
console.log(countThis * countThisReturned);
var multiplyThisReturned = 14; 

// I think the modulus of multiplyThisReturned and 3 will return the number 2

console.log(multiplyThisReturned % 3);

// I think that the modulus of 2 and 2 will return the number 0 

console.log(countThis % 2);

// I was correct 
//Question 2
if (countThis % 2 == 0){
console.log("I am happy");
} 
//Question 3
else{
console.log("my age modulus 2 is not an even number");
}
//Question 4
if (countThis !==2 || multiplyThisReturned < 10) {
console.log("its ok");
}else 
console.log("Mi ah just a likkle lost but mi a wul it");

if (multiplyThisReturned % countThis == 0 && countThisReturned > 15){
console.log("this aint odd");
} 
else {
console.log("one of these numbers might be odd or greater than 15");
}
//Question 5
if (countThisReturned > 5){
console.log("OKGreat");
}
if (countThis < 4){
console.log("apples");
}
if(multiplyThisReturned % 2 == 0){
console.log("bananas");
}

// multiple 'if' lines seem to add unecessary code almost like a run-on sentence.

// Exercise Function
//Question 1
function sum(a, b) {
console.log(a + b);
}
sum(5, 5);
//Question 2
function product(a, b) {
console.log(a * b);
}
product(5, 5);
//Question 3
function testRun(a, b) {
for (let a = 0; a < b; a++)
console.log(a + 1);
}
testRun(2, 10);
//Question 4
var doug = 49;
function testingAgain(a) {
return a + doug;
}
testingAgain((5));
//Question 5
(function() {
var creating = "I created an IIFE.";
    console.log(creating);
}())
// Exercise Loop
//Question 1
var globalVariable = 1;
//Question 2
function testTwo(a, b) {
for (let a = 0; a <= b; a++)
console.log(a);
}
testTwo(globalVariable, 50);
//Question 3
var a = 0;
while (a<=50){
console.log(a);
a+=2;
    }
//Question 4
var t = 0;
while (t % 15 ==0 && t < 100 ){
console.log("fizzbuzz");
if (t % 3==0){
console.log("fizz");
if(t % 5==0){
console.log("buzz");
t++;
        }
    }
}
//Exercise Math
var staples = ["chicken", "cheese", "milk", "eggs", "fish", "cereal", "apples", "onions", "bread", "potatoes"];
function randomCheck(){
    var text = document.getElementById("input").value;{
  if (input==staples[0]) {
    console.log("staples=-1");
  }
}
}

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
var inventory = [["brush", 3], ["comb", 4], ["hair color", 5], ["hair spray", 2]];
var hour = 19;
if (hour>= 6 && hour < 12){
console.log("Good morning");
}
else if (hour > 12 && hour<18) {
    console.log("Good afternoon");
    

}
else
    console.log("Good evening");
