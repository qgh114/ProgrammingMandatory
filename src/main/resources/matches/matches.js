const matchList = document.getElementById("create-matches-list");


fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(data => (createMatch(match)));



function createMatch(match) {
    const matchElement = document.createElement("div");
    matchElement.innerHTML = `
        <p>${(match.gameResult)}</p>
      
      
        
    `;

    matchList.appendChild(matchElement);
}



