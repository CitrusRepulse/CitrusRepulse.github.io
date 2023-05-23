const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke);

const p_joke = document.getElementById("pjoke");

function getJoke(e) {

    const request_adress = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;


    fetch(
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
}