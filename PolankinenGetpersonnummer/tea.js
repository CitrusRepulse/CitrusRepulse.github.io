psvar=document.getElementById("svar")

function getNumber(){
    console.log("click")
fetch(
    `https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763?_limit=1&_offset=${Math.floor(Math.random() * 20000)}`,
    {
        method: "GET",
        headers: new Headers({
            Accept: "application/json"
        })
    }
)
    .then(res => res.json())
    .then(response => {
        //console.log(response);
        
        let responsearray = response.results;
         console.log(responsearray[0])
        const prsnr = responsearray[0].testpersonnummer;
        psvar.innerHTML= prsnr;
        
        //console.log(response.data.results);
    })
    .catch(error => console.log(error));  
}