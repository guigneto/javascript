function saldoVitorias(vit,der){
    let saldo = vit - der
    return saldo
}

function nivel(saldo){
    let nivel = "Indefinido"

    if (saldo<=10){
        nivel = "Ferro"
    } else if ((saldo>10)&&(saldo<=20)){
        nivel = "Bronze"
    } else if ((saldo>20)&&(saldo<=50)){
        nivel = "Prata"
    } else if ((saldo>50)&&(saldo<=80)){
        nivel = "Ouro"
    } else if ((saldo>80)&&(saldo<=90)){
        nivel = "Diamante"
    } else if ((saldo>90)&&(saldo<=100)){
        nivel = "Lendário"
    } else if ((saldo>100)){
        nivel = "Imortal"
    }
    
    return nivel
}

function main(){
    let saldo_usr = saldoVitorias(145,30)
    let nivel_usr = nivel(saldo_usr)
    console.log(`O Herói tem um saldo de ${saldo_usr} e está no nível de ${nivel_usr}`)
}

main()