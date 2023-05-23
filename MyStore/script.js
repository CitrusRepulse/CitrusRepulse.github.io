class Pengar{

    constructor(antal, pengsort){
        this.antal = antal;
        this.pengsort = pengsort;
    }

}

const input_pris = document.getElementById("pris");
const input_inbet = document.getElementById("inbet");
const svardiv = document.getElementById("svar_div");

const kalkylerknapp = document.getElementById("kalk_knapp")
kalkylerknapp.addEventListener("click", kalkyleraClick)


function kalkyleraClick(){
    
    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    if (t_pris > t_inbet){
        alert("Oi you poor ye? Stop being such a brokey you pest")
    }
    else{
        getExchangeArray(t_inbet, t_pris)

        const exChange_array = getExchangeArray(t_inbet, t_pris);

        svardiv.innerHTML= `<p>inbet= ${t_inbet}, pris= ${t_pris} kr </p>
        <br> <h3>Change back: </h3>
        500: ${exChange_array[0].antal}
        <br>100: ${exChange_array[1].antal}
        <br>50: ${exChange_array[2].antal}
        <br>20: ${exChange_array[3].antal}
        <br>10: ${exChange_array[4].antal}
        <br>5: ${exChange_array[5].antal}
        <br>1: ${exChange_array[6].antal}
        `;
    }
    

}

let exChange = (belopp, sedel) => {return Math.floor(belopp / sedel)}

function getExchangeArray(inbetalning, priset){
    let antal_mynt = 0;
    let pengar_tillbaka = 0;

    let sedlar_mynt_array = []

    //500----
    pengar_tillbaka = inbetalning - priset;
    antal_mynt = exChange(pengar_tillbaka, 500);
    pengar_tillbaka = pengar_tillbaka % 500;

    let t_pengar = new Pengar(0, 500)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    //100----
    antal_mynt = exChange(pengar_tillbaka, 100);
    pengar_tillbaka = pengar_tillbaka % 100;

    t_pengar = new Pengar (0, 100)
    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    //50----
    antal_mynt = exChange(pengar_tillbaka, 50);
    pengar_tillbaka = pengar_tillbaka % 50;

    t_pengar = new Pengar (0, 50)
    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    //20----
    antal_mynt = exChange(pengar_tillbaka, 20);
    pengar_tillbaka = pengar_tillbaka % 20;

    t_pengar = new Pengar (0, 20)
    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    //10----
    antal_mynt = exChange(pengar_tillbaka, 10);
    pengar_tillbaka = pengar_tillbaka % 10;
    
    t_pengar = new Pengar (0, 10)
    if(antal_mynt > 0){
    t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    //5----
    antal_mynt = exChange(pengar_tillbaka, 5);
    pengar_tillbaka = pengar_tillbaka % 5;
            
    t_pengar = new Pengar (0, 5)
    if(antal_mynt > 0){
    t_pengar.antal = antal_mynt
    }
            
    sedlar_mynt_array.push(t_pengar)

    //1----
    antal_mynt = exChange(pengar_tillbaka, 1);
    pengar_tillbaka = pengar_tillbaka % 1;
            
    t_pengar = new Pengar (0, 1)
    if(antal_mynt > 0){
    t_pengar.antal = antal_mynt
    }
            
    sedlar_mynt_array.push(t_pengar)
            
    

    console.log(`antal pengartillbaka = ${pengar_tillbaka} antal 500 sedlar = ${antal_mynt}`);

    return sedlar_mynt_array;
}