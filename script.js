
const button1 = document.querySelector("#submit")
const p=document.querySelector("#disappear")
const h=document.querySelector("#name")
// const name=document.querySelector(".name")
const final = document.querySelector("#userinput")
button1.onclick = confirm;
function confirm(){
    button1.innerText = "Confirm submit";
    button1.onclick = done;
}

function done(){
    const name = final.value;
    h.innerText= "Hey, "+ name;
    p.style.display = "block";
    h.style.display = "block";
}