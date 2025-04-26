const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const port = 5000

const baseObservacoes = {
    observacao: [
        [
            {
                id: 1001,
                idLembrete: 1,
                texto: "Sem açúcar"
            },
            {
                id: 1002,
                idLembrete: 1,
                texto: "Comprar o pó"
            },
        ],
        [
            {
                id: 1003,
                idLembrete: 2,
                texto: "Sem açúcar"
            },
            {
                id: 1004,
                idLembrete: 2,
                texto: "Comprar o pó"
            },
        ]
    ]
}

//GET /lembretes/1/observacoes
app.get('/lembretes/:idLembrete/observacoes', function(req, res) {

    const idLembrete = req.params.idLembrete

    if (idLembrete === 'all') res.json(baseObservacoes)
    else {

        const observacao = baseObservacoes.observacao[idLembrete-1]
        res.json(observacao || [])

    }

})

//POST /lembretes/1/observacoes
app.post('/lembretes/:idLembrete/observacoes', function(req, res) {

    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params

    const observacao = { 
        id: idObservacao, 
        idLembrete,
        texto,
    }

    const observacoes = baseObservacoes.observacao[idLembrete - 1] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete - 1] = observacoes

    res.status(201).json(observacoes)

})

app.listen(port, () => {

    console.log(`Observações (${port}): [OK]`)

})