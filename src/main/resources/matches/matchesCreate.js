const matchFormParentDiv = document.getElementById("create-match-form");
const matchFormExpandButton = document.getElementById("expand-match-form");

const createMatchForm = `<div>
    <label>Name</label>
    <input id="create-match-name" placeholder="name">
    <label>GameResult</label>
    <input id="create-match-gameresult" placeholder="gameresult">    
    <label>date-time</label>
    <input id="create-match-date" placeholder="date-time">    
    <label>kill</label>
    <input id="create-match-kill" placeholder="match kill"> 
    <label>deatch</label>
    <input id="create-match-death" placeholder="death kill">
     <label>assist</label>
    <input id="create-match-assist" placeholder="match assist">
    <button onclick="removeMatchForm()">Cancel Match</button>
    <button onclick="createMatch()">Create A New Match</button>
</div>`;


function showMatchForm() {
    matchFormExpandButton.style.display = "none";
    matchFormParentDiv.innerHTML = createMatchForm;
}

function removeMatchForm() {
    matchFormExpandButton.style.display = "block";
    matchFormParentDiv.innerHTML = "";
}

function createMatch() {
    const matchToCreate = {
        name: document.getElementById("create-match-name").value,
        gameResult: document.getElementById("create-match-gameresult").value,
        date: document.getElementById("create-match-date").value,
        kill: document.getElementById("create-match-kill").value,
        death: document.getElementById("create-match-death").value,
        assist: document.getElementById("create-match-assist").value
    };

    fetch(baseURL + "/matches", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(matchToCreate)
    }).then(response => response.json())
        .then(match => {
            removeMatchForm();
            createMatchTableRow(match);
        }).catch(error => console.log(error));
}


document.getElementById("expand-match-form")
    .addEventListener("click", showMatchForm);
























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



