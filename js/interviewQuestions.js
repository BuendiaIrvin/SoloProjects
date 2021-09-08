// function fizzbuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('fizz')
//         }
//         else if (i % 5 === 0) {
//             console.log('buzz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
// fizzbuzz(20)







/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("Irvin"));





/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Irvin");
console.log(helloMessage);





/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Irvin";
console.log(sayHello(myName));
