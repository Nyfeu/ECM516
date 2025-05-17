const express = require('express')
const app = express()
app.use(express.json())

const axios = require('axios')

const port = 7000
const barramento_port = 10000

// Definir um mapa de funções, tal qual: consulta.
// Trate o evento do tipo ObservacaoCriada
// Caso seu texto tenha a palavra importante, troque seu status
// para importante. Caso contrário, troque para comum
// emita um evento do tipo ObservacaoClassificada
// o evento precisa ter os campos tipos e dados

/* EM CONSULTA:
 
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

*/

const funcoes = {
    ObservacaoCriada: async (observacao) => {
        
        observacao.status = observacao.texto.includes("importante") ? 'importante' : 'comum'

        try {

            await axios.post(`http://localhost:${barramento_port}/eventos`, {
                type: 'ObservacaoClassificada',
                payload: observacao
            })

        } catch (e) {

            console.log(e)

        }

    },
}

app.post('/eventos', async (req, res) => {

    try {

        // Tratando evento de ObservacaoCriada

        const evento = req.body;

        console.log(evento);

        await funcoes[evento.type](evento.payload)

    } catch (e) {

        // Descarte de evento que não é de interesse

        console.log(e);

    } finally {

        // Responde o barramento (impede bloqueio)

        res.end();

    }

})

app.listen(port, () => {

    console.log(`Classificação (${port}): [OK]`)

})