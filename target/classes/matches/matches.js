const matchesTableBody = document.getElementById("match-tbody");
console.log("here")
fetch("http://localhost:8080/matches")
    .then(response => response.json())
    .then(matches => {
        console.log("here i fetch")
        //createMatchesTableRow(matches)
       matches.map(createMatchesTableRow);
    });

function createMatchesTableRow(match) {
    console.log("here i createMAtchesTableRow")
    const matchTableRow = document.createElement("tr");
    matchTableRow.id = match.id;

    matchesTableBody.appendChild(matchTableRow);

    constructMatchTableRow(matchTableRow, match);
}

function constructMatchTableRow(matchTableRow, match) {
    matchTableRow.innerHTML = `
            <td>
                <a href="/matches.html?matchId=${match.id}">
                    <p class="row-match-name">${(match.name)}</p>
                </a>
            </td>
            <td>
                <p class="row-match-gameResult">${(match.gameResult).toString()}</p>
            </td>
            <td>
                <p class="row-match-dateTime">${(match.date.toString())}</p>
            </td>
            <td>
                <p class="row-match-kill">${(match.kill.toString())}</p>
            </td>
            
             <td>
                <p class="row-match-death">${(match.death.toString())}</p>
            </td>
            
             <td>
                <p class="row-match-assist">${(match.assist.toString())}</p>
            </td>
            <td>
            
                <button id="update-button-${match.id}">update button</button>            
            </td>           
            
        `;
    console.log("update knap")

    document.getElementById(`update-button-${match.id}`)
        .addEventListener("click", () => {
            updateMatch(match)});
}

