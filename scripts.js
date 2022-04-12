//Declarando as variaveis

let btnSortear = document.getElementById('btn-sortear');
let resultado = document.getElementById('resultado');

//Criando a função que irá gerar o número sorteado.

function sortear(){

    const ReceberInput = document.getElementById('numMax').value;

    if(ReceberInput != ''){

        parcial = Math.floor(Math.random() * ReceberInput + 1)
        resultado.textContent = `O número sorteado foi: ${parcial}`;

    }else{
        resultado.textContent = 'Insira um número válido';
    }

}


//chamando a função, quando o user clicar no botão sortear

btnSortear.addEventListener('click', sortear);