let champions;


fetch("http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json")
    .then(response => response.json()
        .then(data => {
            champions = Object.values(data.data)
            champions.map(champion => createNewChampion(champion))

        }));

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


