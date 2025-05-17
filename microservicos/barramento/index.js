const express = require('express')
const app = express()
app.use(express.json())

const axios = require('axios')

const port = 10000
const observacoes_port = 5000
const lembretes_port = 4000
const consulta_port = 6000
const classificacao_port = 7000

app.post('/eventos', async (req, res) => {

    // 1. Pegar o evento
    const evento = req.body
    console.log(evento)

    // 2. Enviar o evento para o mss de lembretes
    try {
        await axios.post(`http://localhost:${lembretes_port}/eventos`, evento)
    } catch (e) {
        console.log(e)
    }

    // 3. Enviar o evento para o mss de observações
    try {
        await axios.post(`http://localhost:${observacoes_port}/eventos`, evento)
    } catch (e) {
        console.log(e)
    }

    // 4. Enviar o evento para o mss de observações
    try {
        await axios.post(`http://localhost:${consulta_port}/eventos`, evento)
    } catch (e) {
        console.log(e)
    }

    // 5. Enviar o evento para o mss de classificacao
    try {
        await axios.post(`http://localhost:${classificacao_port}/eventos`, evento)
    } catch (e) {
        console.log(e)
    }

    // 6. "Responder" a requisição para o remetente
    res.end()

})

app.listen(port, () => {

    console.log(`Barramento de Eventos (${port}): [OK]`)

})