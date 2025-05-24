const express = require('express')
const app = express()
app.use(express.json())
const axios = require('axios')

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

const getBacklog = async () => {

    try {

        const resAxios = await axios.get('http://localhost:10000/eventos')
        const eventos = resAxios.data

        eventos.forEach(async element => {
            const etype = element.type
            if (etype === LembreteCriado || etype === ObservacaoCriada || etype === ObservacaoAtualizada) {
                
                try {
                    await funcoes[etype](element.payload)
                } catch (e) {
                    console.log(e)
                }
                
            }
        });

    } catch (e) {
        console.log(e)
    }

}

const baseConsolidada = { data: [] }

const funcoes = {
    LembreteCriado: async (lembrete) => {
        baseConsolidada.data[lembrete.id - 1] = baseConsolidada.data[lembrete.id - 1] || { observacoes: [] }
        Object.assign(baseConsolidada.data[lembrete.id - 1], lembrete)
    },
    ObservacaoCriada: async (observacao) => {
        const observacoes = baseConsolidada.data[observacao.lembreteId - 1]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada.data[observacao.lembreteId - 1]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: async (observacao) => {
        const observacoes = baseConsolidada.data[observacao.lembreteId - 1]['observacoes'] || []
        const observacao_index = observacoes.findIndex((obs) => { obs.id === observacao.id })
        observacoes[observacao_index] = observacao;
    }
}

app.get('/lembretes', (req, res) => {

    res.json(baseConsolidada)

})

app.post('/eventos', async (req, res) => {


    try {

        const evento = req.body

        console.log(evento)

        funcoes[evento.type](evento.payload)

    } catch (e) {

        console.log(e)

    } finally {

        res.end()

    }

})

app.listen(port, async () => {

    getBacklog()
    console.log(`Consulta (${port}): [OK]`)

})