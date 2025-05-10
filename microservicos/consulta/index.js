const express = require('express')
const app = express()
app.use(express.json())

const port = 6000

/*
{
    data: [
        {
            id: 1,
            texto: 'ver um filme',
            observacoes: [
                {
                    id: 1000,
                    texto: 'comprar pipoca',
                    lembreteId: 1
                }
                ...
            ]
        },
        {
            id: 2,
            texto: 'ir à festa',
            observacoes: []
        }
    ]
}
*/

const baseConsolidada = { data: [] }

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada.data[lembrete.id - 1] = baseConsolidada.data[lembrete.id - 1] || { observacoes: [] }
        Object.assign(baseConsolidada.data[lembrete.id - 1], lembrete)
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsolidada.data[observacao.lembreteId - 1]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada.data[observacao.lembreteId - 1]['observacoes'] = observacoes
    }
}

app.get('/lembretes', (req, res) => {

    res.json(baseConsolidada)

})

app.post('/eventos', async (req, res) => {


    const evento = req.body

    console.log(evento)

    funcoes[evento.type](evento.payload)

    res.end()

})

app.listen(port, () => {

    console.log(`Consulta (${port}): [OK]`)

})