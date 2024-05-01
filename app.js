//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
//console.log(`o numero secreto é ${numeroSecreto}`)

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'temtativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        //tentativa = tentativa +1
        tentativa++;
        limparCampo();    
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 +1);
}
function reiniciarJogo(){
    numeroSecreto =gerarNumeroAleatorio;
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}