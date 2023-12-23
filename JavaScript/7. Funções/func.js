//exemplo simples
function torrar(){
    console.log("Torrando pão")
}

function injetar(){
    console.log("Injetando pão")
    torrar()
}

injetar()

//exemplo mais pratico:
function getData(){
    console.log("pegando dados do usuario")
}

function checkValues(){
    console.log("validando dados")
}

function sendToDatabase(){
    console.log("cadastrando dados")
}

function main(){
    getData()
    checkValues()
    sendToDatabase()
}

main()

//metodos == funçoes