const button = document.querySelector("button");
const output = document.querySelector(".output");
const myName = document.querySelector("input");

console.log(button);

button.addEventListener("click", showMessage);

function showMessage(){
    output.innerHTML = `<h1>Welcome to your page ${myName.value}, enjoy.</h1>`
}