document.addEventListener("DOMContentLoaded", function () {
    var clickCounter = 0;
    var hoverCounter = 0;

    var method2Element = document.getElementById("Method2");
    method2Element.addEventListener("click", changeTextOnClick);

    var method3Element = document.getElementById("Method3");
    method3Element.addEventListener("mouseover", changeTextOnHover);

    var method4Element = document.getElementById("Method4");
    method4Element.addEventListener("keydown", writeTextOnKey);

    function writeTextOnKey(event) {
        event.target.innerHTML = "On a appuyé sur : " + event.key;
    }

    function changeTextOnClick(event) {
        event.target.classList.add('boxChanged');
        clickCounter++;
        event.target.innerHTML = "On m'a cliqué dessus : " + clickCounter + " fois";
    }

    function changeTextOnHover(event) {
        event.target.classList.add('survol');
        hoverCounter++;
        event.target.innerHTML = "On m'a survolé : " + hoverCounter + " fois";
    }

});







