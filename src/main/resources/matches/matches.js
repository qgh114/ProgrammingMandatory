const matchesTableBody = document.getElementById("matches-tbody");

fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(matches => {
        matches.map(createMatchTableRow);
    });

function createMatchTableRow(match) {
    const matchTableRow = document.createElement("tr");
    matchTableRow.id = match.id;

    matchesTableBody.appendChild(matchTableRow);

    constructMatchTableRow(matchTableRow, match);
}

function constructMatchTableRow(matchTableRow, match) {
    matchTableRow.innerHTML = `
            <td>
                <a href="./matches.html?matchId=${match.id}">
                    <p class="row-match-name">${escapeHTML2(match.name)}</p>
                </a>
            </td>
            <td>
                <p class="row-match-gameResult">${escapeHTML2(match.gameResult)}</p>
            </td>
            <td>
                <p class="row-match-date">${escapeHTML2(match.date)}</p>
            </td>
            <td>
                <p class="row-match-death">${escapeHTML2(match.death.toString())}</p>
            </td>
            <td>
                <p class="row-match-kill">${escapeHTML2(match.kill.toString())}</p>
            </td>
            <td>
                <p class="row-assist-death">${escapeHTML2(match.assist.toString())}</p>
            </td>
            <td>
                <button id="update-button-${match.id}">🥯</button>            
            </td>           
            <td>
                <button onclick="deleteMatch(${match.id})">❌</button>            
            </td>
        `;

    document.getElementById(`update-button-${match.id}`)
        .addEventListener("click", () => updateMatch(match));
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
