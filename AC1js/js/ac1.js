
console.log("app.js conectado");


const header = document.querySelector("header");


const tarjetas = document.querySelectorAll(".tarjeta");
console.log(tarjetas.length);


const h1 = document.querySelector("h1");
document.getElementById("btn-h1").onclick = () => {
    h1.textContent = "Texto cambiado";
};


document.getElementById("btn-add").onclick = () => {
    tarjetas[0].classList.add("destacado");
};

 
document.getElementById("btn-toggle").onclick = () => {
    tarjetas[1].classList.toggle("destacado");
};