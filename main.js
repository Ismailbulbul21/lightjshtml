
let count=document.querySelector("#count")
let btnincrement=document.querySelector("#btnincrement")
let btnreset=document.querySelector("#btnreset")
 



let value=0
btnincrement.addEventListener("click" , ()=>{

    value++
    count.innerHTML=value 
})

btnreset.addEventListener("click" , ()=>{

    value=0
    count.innerHTML=value 
})