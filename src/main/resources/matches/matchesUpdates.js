function updateMatch(match) {
    const tableRowToUpdate = document.getElementById(match.id);

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-match-name-${match.id}" value="${(match.name)}">
        </td>
        <td>
            <input id="update-match-gameResult-${match.id}" value="${(match.gameResult)}">
        </td>
       <td>
            <input id="update-match-date-${match.id}" value="${(match.date)}">
       </td>
       <td>
            <input id="update-match-kill-${match.id}" type="number" value="${(match.kill.toString())}">
       </td>
        <td>
            <input id="update-match-death-${match.id}" type="number" value="${(match.death.toString())}">
       </td>
        <td>
            <input id="update-match-assist-${match.id}" type="number" value="${(match.assist.toString())}">
       </td>
       <td>
           
            <button onclick="updateMatchInBackend(${match.id})">✅</button>
       </td>
     
    `;

}

function updateMatchInBackend(matchId) {

    const tableRowToUpdate = document.getElementById(matchId);

    const matchToUpdate = {
        id: matchId,
        name: document.getElementById(`update-match-name-${matchId}`).value,
        gameResult: document.getElementById(`update-match-gameResult-${matchId}`).value,
        date: document.getElementById(`update-match-date-${matchId}`).value,
        kill: document.getElementById(`update-match-kill-${matchId}`).value,
        death: document.getElementById(`update-match-death-${matchId}`).value,
        assist: document.getElementById(`update-match-assist-${matchId}`).value
    };

    fetch("http://localhost:8080/matches/" + matchId, {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(matchToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructMatchTableRow(tableRowToUpdate, matchToUpdate);
        }
    });
}

function deleteMatch(matchId) {
    fetch(baseURL + "/matches/" + matchId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(matchId).remove();
        } else {
            console.log(response.status);
        }
    });
}




