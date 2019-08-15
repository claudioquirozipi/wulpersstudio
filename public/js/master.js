// **************   desplegables idiomas  ***************

//variables
var menuCircle = document.getElementById('menu__ContainerCircle');
var menuBanderas = document.getElementById('menu__Desplegable');
var menuDatos = document.getElementById('menu__ContainerDatos');
var varMostrar = false;
// function
function Mostrar() {
	menuBanderas.className += " menu__Desplegable--show";
	menuDatos.className += " menu__ContainerDatos--mostrar";
}
function Ocultar() {
	menuBanderas.className = "menu__Desplegable";	
	menuDatos.className = "menu__ContainerDatos";
}
menuCircle.addEventListener("click", () => {
	if (varMostrar == false) {
		Mostrar();
		varMostrar = true;
	} else {
		Ocultar();
		varMostrar = false;
	}

})
