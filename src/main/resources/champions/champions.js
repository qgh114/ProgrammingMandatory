const championList = document.getElementById("create-champions-list");


    fetch(baseURL + "/champions")
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



