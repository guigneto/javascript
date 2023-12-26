class formaDeBolo{ //classe
    constructor(sabor_massa, sabor_recheio){ //nome padrão
        this.sabor_massa = sabor_massa;
        this.sabor_recheio = sabor_recheio;
    }

    escrever(){ //em classe nao precisa escrever function
        console.log(`Um delicioso bolo de ${this.sabor_massa} com recheio de ${this.sabor_recheio}`)
    }

    assar(){
        console.log(`Bolo de ${this.sabor_massa} assando`)
    }
}

let bolo_festa = new formaDeBolo("chocolate", "nutella"); //instanciamento de objeto
let bolo_premium = new formaDeBolo("baunilha","coco")

bolo_festa.escrever()
bolo_premium.escrever()