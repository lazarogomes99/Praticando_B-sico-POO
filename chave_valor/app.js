import ingredientes from './ingredientes.js';
import modificador from './modificardor02.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome');
let containerIngredientes = document.querySelector('div#container-ingredientes')

for (let ingrediente of ingredientesCapitalizados) {
    
    let textoHTML = `
        <div class="ingrediente">
            <img src="./img/${ingrediente.img}" />
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        <div/>
    `;

    containerIngredientes.innerHTML += textoHTML;
}