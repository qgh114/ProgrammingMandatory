const link = 'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json'

fetch(baseURL + "/summoners", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(link)
}).then(response => console.log(response))
    //.then(summoner => {
        //console.log()
    //}).catch(error => console.log(error));
//}