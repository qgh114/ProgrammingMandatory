function updateMatch(match) {
    const tableRowToUpdate = document.getElementById(match.id);

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-match-name-${match.id}" value="${escapeHTML2(match.name)}">
        </td>
        <td>
            <input id="update-match-gameResult-${match.id}" value="${escapeHTML2(match.gameResult)}">
        </td>
       <td>
            <input id="update-match-date-${match.id}" value="${escapeHTML2(match.date)}">
       </td>
       <td>
            <input id="update-match-kill-${match.id}" type="number" value="${escapeHTML2(match.kill.toString())}">
       </td>
        <td>
            <input id="update-match-death-${match.id}" type="number" value="${escapeHTML2(match.death.toString())}">
       </td>
        <td>
            <input id="update-match-assist-${match.id}" type="number" value="${escapeHTML2(match.assist.toString())}">
       </td>
       <td>
            <button id="cancel-update-${match.id}">✖️</button>
            <button onclick="updateMatchInBackend(${match.id})">✅</button>
       </td>
       <td>
            <button onclick="deleteMatch(${match.id})">❌</button>
       </td>
    `;

    document.getElementById(`cancel-update-${match.id}`)
        .addEventListener("click", () => undoUpdateTableRow(match));
}

function undoUpdateTableRow(match) {
    const matchTableRow = document.getElementById(match.id);

    constructMatchTableRow(matchTableRow, match);
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

    fetch(baseURL + "/matches/" + matchId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(matchToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructMatchTableRow(tableRowToUpdate, matchToUpdate);
        }
    });

}

