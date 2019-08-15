// *********** desktop ****************

var bottomChecked1 = document.getElementById('checked__bottom1');
var bottomChecked2 = document.getElementById('checked__bottom2');
var bottomChecked3 = document.getElementById('checked__bottom3');
var containerChecked1 = document.getElementById('checked__article1');
var containerChecked2 = document.getElementById('checked__article2');
var containerChecked3 = document.getElementById('checked__article3');

bottomChecked1.addEventListener("click", function(){
    containerChecked1.className = "checked__article checked__visible";
    containerChecked2.className = "checked__article";
    containerChecked3.className = "checked__article";
});
bottomChecked2.addEventListener("click", function(){
    containerChecked1.className = "checked__article";
    containerChecked2.className = "checked__article checked__visible";
    containerChecked3.className = "checked__article";
});
bottomChecked3.addEventListener("click", function(){
    containerChecked1.className = "checked__article";
    containerChecked2.className = "checked__article";
    containerChecked3.className = "checked__article checked__visible";
});

//  ********mobile***************

var bottomCheckedMobile1 = document.getElementById('checked__bottom--mobile1');
var bottomCheckedMobile2 = document.getElementById('checked__bottom--mobile2');
var bottomCheckedMobile3 = document.getElementById('checked__bottom--mobile3');
var containerCheckedMobile1 = document.getElementById('checked__article--mobile1');
var containerCheckedMobile2 = document.getElementById('checked__article--mobile2');
var containerCheckedMobile3 = document.getElementById('checked__article--mobile3');


bottomCheckedMobile1.addEventListener("click", function(){
    containerCheckedMobile1.className = "checked__article checked__visible--mobile";
    containerCheckedMobile2.className = "checked__article";
    containerCheckedMobile3.className = "checked__article";
    document.body.style.overflow = "hidden";
});
bottomCheckedMobile2.addEventListener("click", function(){
    containerCheckedMobile1.className = "checked__article";
    containerCheckedMobile2.className = "checked__article checked__visible--mobile";
    containerCheckedMobile3.className = "checked__article";
    document.body.style.overflow = "hidden";
});
bottomCheckedMobile3.addEventListener("click", function(){
    containerCheckedMobile1.className = "checked__article";
    containerCheckedMobile2.className = "checked__article";
    containerCheckedMobile3.className = "checked__article checked__visible--mobile";
    document.body.style.overflow = "hidden";
});

var cerrarMobile1 = document.getElementById("checked__article--mobile-cerrar1");
var cerrarMobile2 = document.getElementById("checked__article--mobile-cerrar2");
var cerrarMobile3 = document.getElementById("checked__article--mobile-cerrar3");

cerrarMobile1.addEventListener("click", () => {
	cerrarMobile();
})
cerrarMobile2.addEventListener("click", () => {
	cerrarMobile();
})
cerrarMobile3.addEventListener("click", () => {
	cerrarMobile();
})

function cerrarMobile(){
	containerCheckedMobile1.className = "checked__article";
    containerCheckedMobile2.className = "checked__article";
    containerCheckedMobile3.className = "checked__article";
    document.body.style.overflow = "visible";
}