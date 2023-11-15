//exo 2 et 3

alert("Hello World");
var MavariableString = "Toto";
var MavariableNumerique = prompt("Entrer un nombre",100);
var Mavariabletableau = ['Apple' , 'Banana'];
var MavariableObjet = window //window.innerWidth et window.innerHeight
alert(MavariableString + MavariableNumerique + Mavariabletableau + MavariableObjet.location.pathname);

if (MavariableString =="Toto" && MavariableNumerique !=200 || MavariableNumerique <=100){
    alert("Je suis le cas 1")
}else{
    alert("Je suis le cas 2")
}

//exo 4 : 
//En lisant ce code on sait que l'on doit entrer 200


//Exo 5 :


function checkWidth() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 300) {
        alert("La largeur de votre navigateur est inférieure à 300px.");
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);


