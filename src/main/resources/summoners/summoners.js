const summonerList = document.getElementById("create-summoners-list");
//let summoners;



fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +  +
    "?api_key=" + apiKey)
    .then(response => response.json())
    .then(data => createNewSummoner(data));


/*fetch(" ")
    .then(response => response.json()
        .then(data => {
            Object.keys(data.data).map(data=>console.log(data))
            //summoners.map(summoner => createSummoner(summoner))
        }));*/



/*function createSummoner(summoner) {
    const summonerElement = document.createElement("div");
    summonerElement.innerHTML = `
        <p>${escapeHTML2(summoner.name)}</p>
        <p>${escapeHTML2(summoner.summonerLevel.toString())}</p>
  
    `;

    summonerList.appendChild(summonerElement);
}*/


function createNewSummoner(summoner) {
    const newSummoner = {
        name: summoner.name,
        summonerLevel: summoner.summonerLevel
    }

    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newSummoner)

    }).then(response=> console.log("im here"))
        .catch(error => console.log("Network related error:", error))
}

