let boton = document.getElementsByClassName('giveTry');
let inputForm = document.getElementById('email')

function giveATry() {
    inputForm.focus()
    
}


boton[0].addEventListener("click", () => {
    giveATry()
})
boton[1].addEventListener("click", () => {
    giveATry()
})