var first = "Hello my name is Jamilla";
var second = " and this is Javascript.. Yayy! lol"
console.log(first + second);
var age = 39;
console.log(first * age);
while (age < 39){
console.log("Your age is less than 45");
age++;
}
console.log(2+true);
console.log("you are now less than 45");

// Exercise Conditional
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

if (countThis % 2 == 0){
    console.log("I am happy");
} 
else{
    console.log("my age modulus 2 is not an even number");
}
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
if (countThisReturned > 5){
    console.log("OKGreat");
}
if (countThis < 4){
console.log("apples");
}
if(multiplyThisReturned % 2 == 0){
    console.log("bananas");
}

// multiple if lines seem to add unecessary code almost like a run-on sentence.

// Exercise Function
function sum(a, b) {
    console.log(a + b);
}
sum(5, 5);
function product(a, b) {
    console.log(a * b);
}
product(5, 5);
function testRun(a, b) {
    for (let a = 0; a < b; a++)
console.log(a + 1);
}
testRun(2, 10);
var doug = 49;
function testingAgain(a) {
    return a + doug
}
testingAgain(5);
