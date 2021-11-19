const championList = document.getElementById("create-champions-list");


    fetch(baseURL + "/champions")
    .then(response => response.json())
    .then(data => data.map(createChampion));



function createChampion(champion) {
    const championElement = document.createElement("div");
    championElement.innerHTML = `
        <p>${(champion.name)}</p>
        <p>${(champion.role)}</p>
        <p>${(champion.moderate)}</p>
        <p>${(champion.summoner.name)} is his owner</p>
        <p>${(champion.summoner.summonerLevel)} summonerLevel</p>
        <img src="${(champion.image)}">
        
    `;

    championList.appendChild(championElement);
}



