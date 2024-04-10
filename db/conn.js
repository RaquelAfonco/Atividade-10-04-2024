const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect(`mongodb+srv://araquel:7OpynX1B1XOKG159@cluster0.oujmiaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('Banco OK');        
    } catch (error) {
        console.log('Erro: ' + error);
    }

}

module.exports = main
