const button = document.querySelector("button");
const output = document.querySelector(".output");
const myName = document.querySelector("input");


console.log(button);

// button.addEventListener("click", showMessage);
button.addEventListener("click", showOutput);

function showOutput() {
    const date = new Date();
    let cur = date.getHours();
    let message;

    if (cur > 17) {
        message = "Good Evening";
        output.style.backgroundColor = "green";
    } else if (cur > 12) {
        message = "Good Afternoon";
        output.style.backgroundColor = "orange";
    } else if (cur > 0) {
        message = "Good Morning";
        output.style.backgroundColor = "yellow";
    } else {
        message = "Something is Wrong";
        output.style.backgroundColor = "red";
    }
    console.log(date.toDateString());

        output.innerHTML = `<h1>${message} ${myName.value}, Welcome to your page.</h1>`
    }
