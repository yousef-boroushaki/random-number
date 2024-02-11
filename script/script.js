let inputIf1 = document.querySelector(".if-input1");
let inputIf2 = document.querySelector(".if-input2");
let result2 = document.querySelector(".result2");
let btnIf = document.querySelector(".btn-condition");
let btnIfReset = document.querySelector(".btn-condition-reset");

btnIfReset.addEventListener('click' , () =>{
    inputIf1.value = "";
    inputIf2.value = "";
    result2.innerHTML = "";
})

btnIf.addEventListener('click', ()=>{

    randomNum(parseInt(inputIf1.value) , parseInt(inputIf2.value));
      
    })
        
function randomNum(first , last) {
    var x = Math.floor(Math.random() * (last - first) + first )
    result2.innerHTML = x;
 }