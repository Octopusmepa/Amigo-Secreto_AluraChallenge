// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver
let amigos = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function AñadirAmigo(evt) {
  evt.preventDefault();

  let amigo = document.getElementById("amigo").value.trim();

  if(amigo === ''){
      alert('Este campo no debe estar vacio');
  } else {
    amigos.push(amigo);
    mostrarLista();
    document.getElementById("amigo").value;  
  alert('Se ha insertado el nombre');

  }

}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //Agregar <li> si solo existe <ul>

    amigos.forEach(amigo=>{
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

function sortearAmigo(evt) {
    evt.preventDefault();

    if(amigos.length === 0){
        alert("Primero añade nombres");
        return;
    
}

let indice = Math.floor(Math.random()*amigos.length);
let amigoSecreto = amigos[indice];

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}


asignarTextoElemento('h1','Amigo Secreto');
asignarTextoElemento('h2','Agrega los nombres de tus amigos');

//repasar más sobre sorteos y javascript