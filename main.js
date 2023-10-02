//criando a função que vai tocar o som com parâmetro (o botão escolhido)
function tocaSom (seletorAudio) {
    //buscando o botão que foi cliado 
    const elemento = document.querySelector(seletorAudio);

    //verificação se o elemento existe, ou se ele é um elemento do tipo audio
    if (elemento && elemento.localName == "audio") {
        //dando play caso a verificação seja verdadeira
        elemento.play();
    } else {
        //apresentando um erro caso uma das verificações seja falsa
        console.log("Elemento não encontrado ou Seletor inválido")
    }
}

//criando a constante que conterá a lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');



//para: estrutura de repetição avançada
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //criação de uma referência para guardar cada tecla, acessando o índice da lista de teclas através do contador
    const tecla = listaDeTeclas[contador];
    //criação de uma referência para a segunda classe atribuida ao elemento tecla selecionado pelo contador
    const instrumento = tecla.classList[1];
    //referência para conter o ID do elemento audio, utilizando a string inicial das IDs com a Template String node vai pegar a segunda classe da variável tecla para completar esta ID.
    const idAudio = `#som_${instrumento}`;

    //Aqui estamos atribuindo o atributo onclick a tecla escolhida, onde uma função anônima será chamada, e dentro dela estará a função toca som
    tecla.onclick = function () {
        //chamando a função tocaSom
        tocaSom(idAudio);
    }

    // quando informamos um parâmetro a uma função que está ligada a um evento, o console nos informa todas as propriedades deste evento
    //incluindo uma função na propriedade da TECLA ABAIXADA (onkeydown)
    tecla.onkeydown = function (evento) {
        //verificando se a tecla abaixada é o Space ou o Enter
        if (evento.code == "Space" || evento.code == "Enter") {
            //adicionando a classe ativa a tecla escolhida
            tecla.classList.add("ativa");
        }
    }

    //incluindo uma função na propriedade para quando a tecla for subida
    tecla.onkeyup = function () {
        //retirando a classe ativa da tecla que foi solta
        tecla.classList.remove("ativa");
    }

}
