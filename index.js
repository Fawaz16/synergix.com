
let minidiv = document.querySelector('.wrapper')
let hamburger = document.querySelector('.hamburger')
let closebtn = document.querySelector('.close')
let first = document.querySelector('.first')


hamburger.addEventListener("click",() =>{
    minidiv.style.transform="translateX(0px)";
if (minidiv.style.transform="translateX(0px)") {
    closebtn.style.display="block"
   hamburger.style.display="none"

    
}
})
closebtn.addEventListener("click",() =>{
    minidiv.style.transform="translateY(-768px)";
if (minidiv.style.transform="translateY(-768px)") {
    hamburger.style.display="block"
    closebtn.style.display="none"
 
}
})