/* fetch(baseURL + "/champions")
   .then(response => response.json())
    .then(data => data.map(createChampion));



function createChampion(champion) {
    const championElement = document.createElement("div");
    championElement.innerHTML = `
        <p>champion name: ${(champion.name)}</p>
        <p>champion role: ${(champion.role)}</p>
        <p>champion moderate: ${(champion.moderate)}</p>
        <p>${(champion.summoner.name)} is summoner's name</p> 
        <p>${(champion.summoner.name)} is ${(champion.summoner.summonerLevel)}</p>
        <img src="${(champion.image)}">
        
    `;

    championList.appendChild(championElement);
}



*/

let champions;


/*
fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +  +
    "?api_key=" + apiKey)
    .then(response => response.json())
    .then(data => createNewSummoner(data));*!/*/


fetch("http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json")
    .then(response => response.json()
        .then(data => {
            champions = Object.values(data.data)
            champions.map(champion => createNewChampion(champion))
            //console.log(Object.values(data.data));
            //console.log(Object.values(data.data)[0].name)
            //console.log(Object.values(data.data)[0].summonerLevel)

        }));

/*function createChampion(data) {
    const championElement = document.createElement("div");
    championElement.innerHTML = `
        <p>${escapeHTML2(data.name)}</p>
        <p>${escapeHTML2(data.title)}</p>
        <p>${escapeHTML2(data.blurb)}</p>
       
    `;

    championList.appendChild(championElement);
}*/


/*function createSummoner(summoner) {
    const summonerElement = document.createElement("div");
    summonerElement.innerHTML = `
        <p>${escapeHTML2(summoner.name)}</p>
        <p>${escapeHTML2(summoner.summonerLevel.toString())}</p>

    `;

    summonerList.appendChild(summonerElement);
}*/




function createNewChampion(champion) {
    const newChampion = {
        name: champion.name,
        title: champion.title,
        blurb: champion.blurb,
        image: "https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/" + champion.image.full,
        tags: champion.tags[0]

    }

    fetch(baseURL + "/champions", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newChampion)

    }).then(response=> console.log("im here"))
        .catch(error => console.log("Network related error:", error))
}


