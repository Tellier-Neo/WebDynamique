let n = prompt("Veuillez entrer un nombre N:", "0");
n = parseInt(n);
let fact = 0;

function addition(a, b) {
    return a + b;
}

if (isNaN(n)) {
    alert("Erreur: Le nombre entré n'est pas valide.");
} else {
    for (let i = 1; i <= n; i++) {
        fact += i;
        let result = addition(i, 10);
        alert("Le résultat de l'addition pour " + i + " et 10 est: " + result);
    }
    alert("Le résultat du calcul du factoriel est: " + fact);
}

