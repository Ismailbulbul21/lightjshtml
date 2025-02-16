
let light=document.querySelector("#light")
let buttonone=document.querySelector("#btnOn")
let button2=document.querySelector("#btnOff")
 
buttonone.addEventListener("click" , ()=>{
    light.style.backgroundColor="yellow"

})

button2.addEventListener("click" , ()=>{
    light.style.backgroundColor="white"

})