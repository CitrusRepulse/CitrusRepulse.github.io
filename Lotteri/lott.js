const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "Russian nuke sent on your house",
    "Ticket to the worst artist",
    "Eiffeltower",
    "Massage from Putin",
    "10 000 000 to pay in damages",
    "Swat raid at your own house",
    "A bearded man",
    "Rights to land in Siberia",
    "A house in arctica",
    "12 swdish crowns",
    "Marry a student in estestics",
    "Snowboard",
    "Bottle of whale cum",
    "100 bottles of expired milk",
    "Transaction into femboy",
    "Gender swap using magic",
    "50lb of rotten flesh",
    "Every steam game but you can't search up games",
    "5 children with no legs",
    "A day with kindergardeners",
    "A wife and life",
]

function slumpaClick(){

    let vinst = `<h3>Your wins</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    for (i=0; i<int_antalv; i++) {
        let slumptal = Math.floor(Math.random() * 20)
        let tvinst = vinster[slumptal];
        vinst += `<p>${tvinst}</p>`
    }

    svar_div.innerHTML = vinst;
}