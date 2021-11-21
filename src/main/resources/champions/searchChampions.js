const championGalleryDiv = document.getElementById("create-champions-list");
let championss;
let filteredChampions;

fetch("http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json")
    .then(response => response.json()
        .then(data => {
            championss = Object.values(data.data)
            filteredChampions = championss;
            championss.map(champion => createChampionCard(champion))

        }));


function createChampionCard(champion) {
    const championElement = document.createElement("div");
    championElement.innerHTML = `
        <p>${escapeHTML2(champion.name)}</p>
        <p>${escapeHTML2(champion.title)}</p>
        <p>${escapeHTML2(champion.blurb)}</p>
        <p>${escapeHTML2(champion.tags[0])}</p>
        <img src="${escapeHTML2("https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/"
        + champion.image.full)}" width="110">
           
  
    `;
    championGalleryDiv.appendChild(championElement);
}


function searchChampions() {
    const selectedStatus = document.getElementById("status-dropdown").value;
    championGalleryDiv.innerHTML = "";

    if (selectedStatus === "All") {
        filteredChampions = championss;
        championss.map(createChampionCard);
    } else {
        filteredChampions = championss.filter(champion => champion.tags[0] === selectedStatus);
        filteredChampions.map(createChampionCard);
    }
}

function handleSearchName(event) {
    championGalleryDiv.innerHTML = "";
    const searchTerm = event.target.value.toLowerCase();
    filteredChampions.filter(champion => champion.name.toLowerCase().includes(searchTerm))
        .map(createChampionCard);
}



document.getElementById("search").addEventListener("click", searchChampions);
document.getElementById("name-search").addEventListener("input", handleSearchName);


