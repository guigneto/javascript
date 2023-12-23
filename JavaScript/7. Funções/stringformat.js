//string format in JS: console.log(`string ${variable}`)
function createStringConnection(databaseName,user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

createStringConnection("db_products", "guizi", 9124)