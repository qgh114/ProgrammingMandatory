const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const matchId = URLParams.get("matchId");

fetch("http://localhost:8080/matches/" + matchId)
    .then(response => response.json())
    .then(match => {
        document.getElementById("match-name").innerText = match.name;
        document.getElementById("match-gameresult").innerText = match.gameResult;
        document.getElementById("match-date").innerText = match.date;
        document.getElementById("match-kill").innerText = match.kill;
        document.getElementById("match-assist").innerText = match.assist;
        document.getElementById("match-death").innerText = match.death;
    });
