
function fetchData() {
    fetch(
        "http://192.168.64.187/data/fichier.json",
        { method: 'GET' }
    ).then(
        response => response.json()
    ).then(
        response2 => document.getElementById("result").innerHTML = JSON.stringify(response2)
    ).catch(error => console.log("Erreur : " + error));
}

document.addEventListener("DOMContentLoaded", fetchData);



