class JokeHandlerRequest {

    constructor(adress) {
        this.adress = adress;
    }
    async getJoke() {
        let joke_string = "This ain't no joke fool";
    
    await fetch(
        request_adress,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            //console.log(response= ${response.joke})
            let jokestring = response.joke;
            p_joke.innerHTML = jokestring
    
        })
        .catch(error => { console.log(error); joke_string += error });

        return joke
    }
}//Class end


const jokebutton = document.getElementById("Jokebutton");
jokebutt.addEventListener("click", getJoke);
const p_joke = document.getElementById("pjoke");

async function getJoke(e) {
    const request_adress = 
    `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
    let joke_object = new JokeHandlerRequest(request_adress);
    //let t_var = await joke_object.getJoke();
    //p_joke.innerHTML = t_var;
    p_joke.innerHTML = await joke_object.getJoke();
}