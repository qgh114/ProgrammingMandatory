let summoners;


fetch("https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json")
    .then(response => response.json()
        .then(data => {
           summoners = Object.values(data.data)
           // console.log(summoners.image.full)
            summoners.map(summoner => createNewSummoner(summoner))
            //console.log(Object.values(data.data));
            //console.log(Object.values(data.data)[0].name)
            //console.log(Object.values(data.data)[0].summonerLevel)

        }));

/*function createSummoner(data) {
    const summonerElement = document.createElement("div");
    summonerElement.innerHTML = `
        <p>${escapeHTML2(data.name)}</p>
        <p>${escapeHTML2(data.summonerLevel.toString())}</p>

    `;

    summonerList.appendChild(summonerElement);
}*/


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
        summonerLevel: summoner.summonerLevel,
        image: "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/" + summoner.image.full
    }

    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newSummoner)

    }).then(response=> console.log("im here"))
        .catch(error => console.log("Network related error:", error))
}

