//retorno de funcoes
function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

function resultadoSoma(){
    let a = 6
    let b = 13
    let resultado = soma(a,b)
    console.log(`Resultado de ${a} + ${b} = ${resultado}`)
}

resultadoSoma()

//exemplo do dia a dia 
function getFirstName(name, split_char= " "){
    let first_name = name.split(split_char)[0] //cria array[Guilherme,Gomes] e pega o indice 0
    return first_name
}

function main(){
    let user_name = getFirstName("Guilherme Gomes de Faria Neto")
    console.log(`Seja Bem Vindo ${user_name}`)

    user_name = getFirstName("Antonio-Carlos-Prada", "-")
    console.log(`Seja Bem Vindo ${user_name}`)
}

main()