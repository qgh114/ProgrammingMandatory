const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const matchId = URLParams.get("matchId");

fetch(baseURL + "/matches/" + matchId)
    .then(response => response.json())
    .then(match => {
        document.getElementById("match-name").innerText = match.name;

    });

