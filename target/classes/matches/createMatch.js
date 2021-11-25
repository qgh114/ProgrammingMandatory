const createMatchForm = document.getElementById("match");


fetch(baseURL + "/summoners").then(response =>  response.json())
    .then(data => {
        const selectedSumm = document.getElementById("create-match-name");
        for(let i = 1; data.length; i++){

            const optional = document.createElement("option");
            optional.innerHTML = data[i]["name"];
            selectedSumm.appendChild(optional);
        }
    });

function createMatch() {

    const matchToCreate = {
        name: document.getElementById("create-match-name").value,
        gameResult: document.getElementById("create-match-gameResult").value,
        date: document.getElementById("create-match-date").value,
        kill: document.getElementById("create-match-kill").value,
        death: document.getElementById("create-match-death").value,
        assist: document.getElementById("create-match-assist").value
    }

    fetch( baseURL + "/matches",{
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(matchToCreate)
    }).then(response => response.json())
        .catch(error => console.log(error));
}

























/*
const matchList = document.getElementById("create-matches-list");


fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(data => (createMatch(data)));



function createMatch(match) {
    const matchElement = document.createElement("div");
    matchElement.innerHTML = `
        <p>${(match.gameResult)}</p>
      
      
        
    `;

    matchList.appendChild(matchElement);
}
*/



