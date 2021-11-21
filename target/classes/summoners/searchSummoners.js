const summonerGalleryDiv = document.getElementById("create-summoners-list");
let summoners;
let filteredSummoners;

fetch("http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json")
    .then(response => response.json()
        .then(data => {
            summoners = Object.values(data.data)
            summoners.map(summoner => createSummonerCard(summoner))

        }));


function createSummonerCard(summoner) {
    const summonerElement = document.createElement("div");
    summonerElement.innerHTML = `
        <p>${escapeHTML2(summoner.name)}</p>
        <p>${escapeHTML2(summoner.summonerLevel.toString())}</p>
        <img src="${escapeHTML2("https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/"
                  + summoner.image.full)}" width="110">
  
    `;

    summonerGalleryDiv.appendChild(summonerElement);
}


function searchSummoners() {
    const selectedStatus = document.getElementById("status-dropdown").value;
    summonerGalleryDiv.innerHTML = "";

    if (selectedStatus === "All") {
        filteredSummoners = summoners;
        summoners.map(createSummonerCard);
    } else {
        filteredSummoners = summoners.filter(summoner => summoner.status === selectedStatus);
        filteredSummoners.map(createSummonerCard);
    }
}

/*function handleSearchName(event) {
    characterGalleryDiv.innerHTML = "";
    const searchTerm = event.target.value.toLowerCase();
    filteredCharacters.filter(character => character.name.toLowerCase().includes(searchTerm))
        .map(createCharacterCard);
}*/

document.getElementById("search").addEventListener("click", searchCharacters);
//document.getElementById("name-search").addEventListener("input", handleSearchName);

