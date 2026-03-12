const boton = document.getElementById("BienvenidaBtn");

boton.addEventListener("click", function() {
alert("¡Bienvenido a mi página web!");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const motivo = document.getElementById("motivo").value.trim();

if(name === "" || email === "" || motivo === ""){

alert("Por favor completa todos los campos del formulario.");
event.preventDefault();

}else{

alert("Formulario enviado correctamente.");

}

});