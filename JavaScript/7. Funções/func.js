//funçoes com parametro
function torrar(pao, nome = "Cliente"){ //sempre deixar a variavel opcional por ultimo
    console.log("torrada feita com "+pao)
    console.log("ele é um pedido de "+nome)
}

torrar("pão de forma","Anitta")