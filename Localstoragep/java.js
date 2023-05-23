class Bil {
    constructor(brand, color, bid){
        this.brand = brand;
        this.color = color;
        this.bid = bid;
    }
}
 
let billista = [];
 
/**getDataFromLocalStorage() Hämtar data från localstorage */ 
async function getDataFromLocalStorage(){
    try {
          
        billista = await JSON.parse(localStorage.getItem("bilarlistan") );
 
 
 
        //Om billistan  är tom Null från localStorage
        if (billista == null)
            billista = []
        
        lista_bilar_div.innerHTML = "";
        
        //if (billista != null)
        billista.forEach(createHtmlBilLista);
    }
    catch (e){
        
        console.log(`Fel: ${e}`)
    }
}
getDataFromLocalStorage();
 
// Variabler, nämn vad du vill
const addbutton = document.getElementById("addbutton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const lista_bilar_div = document.getElementById("listabilarDiv");
 
addbutton.addEventListener("click", addButtonClick);
 
function addButtonClick(){
 
    const now = Date.now();
    const id = now.toString();
    let brandname = brand.value;
    console.log(`ID = ${id}`);
 
    if (brandname != ""){
        let car = new Bil(brand.value, color.value, id);
        billista.push(car);
 
        localStorage.setItem("bilarlistan", JSON.stringify(billista));
        brand.value = "";
        color.value = "";
 
        lista_bilar_div.innerHTML = "";
        
        billista.forEach(createHtmlBilLista);
 
    }
    else {
        alert("Måste fylla i fabrikat")
    }
    
    brand.focus();
 
}
// Code to successfully delete en bil
let deleteBil = (e) => {
 
    const ny_billista = billista.filter((o, i) => o.bid !== e.target.id)
    
    billista = ny_billista;
    localStorage.setItem("bilarlistan", JSON.stringify(billista));
    getDataFromLocalStorage();
 
}
 
window.addEventListener("click", deleteBil);
// Seperate
const createHtmlBilLista = (bil) => {
 
    const bildiv = document.createElement("div");
    bildiv.className = "bil_div_element";
    const bilH2 = document.createElement("h2");
    const bilPcolor = document.createElement("p");
    const bilDelButt = document.createElement("button");
    //Innehåll
    bilH2.innerText = `${bil.brand}`;
    bilPcolor.innerText = `Färg: ${bil.color}`;
    bilDelButt.innerText = "Delete";
    bilDelButt.id = bil.bid;
 
    bildiv.append(bilH2, bilPcolor, bilDelButt);
    lista_bilar_div.appendChild(bildiv);
}