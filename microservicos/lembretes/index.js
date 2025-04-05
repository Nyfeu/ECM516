// Inicialização do microserviço

// Um ENDPOINT é caracterizado por um método do protocolo HTTP
// Necessário:
// - Padrão de acesso
// - Uma funcionalidade
// - GET/lembretes () => {}

// Uma API (Application Programming Interface) é uma coleção
// de ENDPOINTs

const express = require('express')
const app = express()

app.get("/lembretes", (req,res) => {

    res.send("<h1>Serviço de Lembretes<\h1>")

})

app.listen(3000, () => console.log("Lembretes: [OK]"))