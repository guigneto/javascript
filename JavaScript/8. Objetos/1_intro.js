//JSON - JavaScript Object Notation
//chave e valor com objetivo de transferir dados

let invoice = {
    nome: "Felipe",
    age: 28,
    products: {
        0: ["Mouse 2xwm",29.90],
        1: ["Teclado mecanico",129.99], 
        2: ["Monitor", 899.99]
    }
}

console.log(invoice.products)
generateInvoice(invoice)

function generateInvoice(invoiceProducts){
    console.log(`O comprador é ${invoiceProducts.nome}`);
    console.log(`Sua idade é ${invoiceProducts.age}`);
    console.log("-----------")
    for (let i in invoice.products){
        let [productName, productPrice] = invoice.products[i]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

//exemplo sem json
// let nome = "Gemo";
// let age = 28;
// let products = ["mouse 2xwm", "Teclado Mecanico", "Monitor"];
// let productsValues = [29.90, 129.99, 899.99];

// function generateInvoice(nome,age,products,productsValues){
//     console.log(`O comprador é ${nome}\nSua idade é ${age}\n-----------\nO produto é ${products[0]}\nO valor é ${productsValues[0]}`)
// }

// generateInvoice(nome,age,products,productsValues)