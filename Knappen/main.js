let siffra = 0;

function plusClick(){
   console.log("plusClick");
   siffra = siffra + 1;

   document.getElementById("taltext").innerHTML = siffra
}

const minusknapp = document.getElementById("minus");

minusknapp.addEventListener("click", minusClick)

function minusClick(){
    siffra--;
    console.log("minusclick")

    document.getElementById("taltext").innerHTML = siffra
}