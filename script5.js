
const myFun = () => {
    console.log("bhai");
    let a = document.getElementsByClassName("hello");
    a.innerHTML="bye";
    let b = document.getElementById("display");
    b.innerHTML = b.innerHTML === `hello`?`bye` : `hello`
};