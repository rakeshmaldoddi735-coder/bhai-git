
const myfun = () => {
   // console.log("bhai");
    //let a = document.getElementsByClassName("hello");
    //a.innerHTML="bye";
    let b = document.getElementById("disply");
    b.innerHTML = b.innerHTML === `hello`?`bye` : `hello`
    b.style.color = b.style.color === `red`?`blue` : `red`

};
let isShow = true ;
const myFun = () => {
    let c = document.getElementById("display");
  if(isShow)
  {
    c.src = "C:\\Users\\rocks\\OneDrive\\Pictures\\1707468592733.jpg"
    isShow = !isShow
  }
  else{
    c.src = "C:\\Users\\rocks\\OneDrive\\Pictures\\IMG_20241204_174632.jpg"
 isShow =!isShow 
}
};