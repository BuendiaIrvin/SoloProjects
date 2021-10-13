const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");
// console.log(button[0]);
// button[0].innerHTML = "Main Tip";
//
// console.log(button[1]);
// button[1].innerHTML = "Side Tip";

console.log(button);
button.addEventListener("click",function(){
    const cost = document.querySelector("input");
    console.log(cost.value *0.15);
    let tip = (cost.value *0.15).toFixed(2);
    let temp = '<h1>You Should tip $' + tip + ' on a $' + cost.value + ' tab. </h1>';
    output.innerHTML = temp;
})