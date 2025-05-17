const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const port = 5000
const barramento_port = 10000

const baseObservacoes = {
    observacao: []
}

// Faça um mapa de funções para que haja o tratamento
// do evento do tipo ObservacaoClassificada. Esse tipo de
// evento deve ser traduzido para outro do tipo ObservacaoAtualizada

// Não se esqueça de atualizar a base local

const funcoes = {
    ObservacaoClassificada: async (observacao) => {
        
        const observacoes = baseObservacoes.observacao[idLembrete - 1] || []
        const observacao_index = observacoes.findIndex((obs) => { obs.id === observacao.id })
        observacoes[observacao_index] = observacao;

        try {

            await axios.post(`http://localhost:${barramento_port}/eventos`, {
                type: 'ObservacaoAtualizada',
                payload: observacao
            })

        } catch (e) {

            console.log(e)

        }

    }
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
        status: 'aguardando'
    }

    const observacoes = baseObservacoes.observacao[idLembrete - 1] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete - 1] = observacoes

    res.status(201).json(observacoes)

})

//POST /eventos
app.post('/eventos', async (req, res) => {

    try {

        // Tratamento evento de ObservacaoClassificada

        const evento = req.body;

        console.log(evento);

        await funcoes[evento.type](evento.payload);

    } catch (e) {

        console.log(e);

    } finally {
    
        res.end();

    }
    
})

app.listen(port, () => {

    console.log(`Observações (${port}): [OK]`)

})