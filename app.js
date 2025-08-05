// Criei essa função para que, ao clicar no botão Sortear, os valores digitados nos campos sejam coletados e armazenados dentro das variáveis.
function sortear (){
    let quantidade = parseInt(document.getElementById('quantidade').value); // Variavél criada para buscar o valor do input cuja o id="quantidade"
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value);
/* Adicionado o parseInt para garantir que o valor que vai retornar pelo value seja do tipo numero inteiro,
  porque por padrão o value retorna uma string */
    let sorteados = [];
    let numero;

    // Criado uma variavel que vai ser o controlador do loop. E criamos um loop que vai de 0 até a *quantidade* que a pessoa digitou
    for ( let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio (de, ate);// (de e até) seria o max e min da function 

        while (sorteados.includes(numero)) {         // enquanto a variavel sorteados tiver o numero 
             numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado'); // pegando o id da div 'resultado'
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`// alterando o texto com o resultado do numero sorteado
}

// Função para gerar o numero aleatorio entre o min e o max 
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; // gera o numero aleatório entre os dois valaores inclusive o ultimo;
}


// teste sincronização