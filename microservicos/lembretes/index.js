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
const port = 4000
const axios = require('axios')

// Middleware
app.use(express.json())

// Iniciando contagem em id = 4
let id = 4 

// Cadastro de lembretes
const baseLembretes = {
    data: [
        {
            id: 1,
            texto: "Acordar",
        },
        {
            id: 2,
            texto: "Tomar café"
        },
        {
            id: 3,
            texto:"Ir para a faculdade",
        },
    ]
}

app.get("/lembretes", (req,res) => {

    res.json(baseLembretes)

})

app.post('/lembretes', async (req, res) => {

    // 1. Pegar o texto que veio da requisição
    const texto = req.body.texto

    // 2. Construir um objeto com id e texto
    const lembrete = { id, texto }

    // 3. Cadastrar o objeto na base, no formato visto 
    baseLembretes.data.push(lembrete)

    // 4. Incrementar o id para a próxima vez
    id++

    // 5. Emitir o evento
    const evento = {
        type: "LembreteCriado",
        payload: lembrete
    }
    
    try {
        const resAxios = await axios.post('http://localhost:10000/eventos', evento)
        res.status(201).json(resAxios.data)
    } catch (e) {
        console.log(e)
    }

})

//POST /eventos
app.post('/eventos', (req, res) => {

    console.log(req.body)
    res.end()

})

// Inicia o serviço na porta (port) e avisa o status
app.listen(port, () => console.log(`Lembretes (${port}): [OK]`))