

function acaoBotao(params) {
    valor01 = prompt ("Digite o primeiro valor: ")
operacao = prompt("Digite a operação: Ex: + , - , * , / , % ")
valor02 = prompt ("Digite o primeiro valor: ")
switch (operacao) {
    case "+":
        resultado = parseInt( valor01 ) + parseInt( valor02 )
        break;
    case "-":
            resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
    case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
    case "/":
            resultado = parseInt( valor01 ) / parseInt( valor02 )
            break;
    case "%":
            resultado = parseInt( valor01 ) % parseInt( valor02 )
            break;
}

document.getElementById("paragrafo").innerText = resultado

}


