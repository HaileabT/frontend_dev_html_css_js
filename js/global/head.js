let whole = document.body;
let accountNav = document.getElementById("account-nav");
let accountDetails = document.getElementById("acc-details-h");
let headInner = document.getElementById("head-i-c");

accountNav.onclick = () => {
    accountDetails.classList.toggle("visible");
}

accountNav.onmouseenter = () => {
    accountNav.classList.add("visi");
}
accountNav.onmouseleave = () => {
    accountNav.classList.remove("visi");
}

document.querySelector("body:not(.account-nav)").onclick = () =>{
    accountNav.classList.remove("visi");
}