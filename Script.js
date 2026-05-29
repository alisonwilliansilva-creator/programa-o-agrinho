// BOTÃO

function mensagem(){

    alert("🌱 Bem-vindo ao projeto Agrinho 2026!");

}

// TEXTO DINÂMICO

const frases = [

    "🌱 AGRINHO 2026",
    "🚜 Agro Forte",
    "🌍 Futuro Sustentável",
    "💧 Preserve o Meio Ambiente"

];

let index = 0;

setInterval(() => {

    document.getElementById("tituloHero").innerHTML =
    frases[index];

    index++;

    if(index >= frases.length){

        index = 0;

    }

},2500);

// CONTADOR ANIMADO

let contador = 0;

const numero = document.getElementById("numero");

setInterval(() => {

    contador += 5;

    numero.innerHTML = contador + "+";

},100);

// RELÓGIO

function atualizarRelogio(){

    const agora = new Date();

    document.getElementById("relogio").innerHTML =
    agora.toLocaleTimeString("pt-BR");

}

setInterval(atualizarRelogio,1000);
