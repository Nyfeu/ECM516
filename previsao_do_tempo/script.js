const dotenv = require('dotenv').config();
const axios  = require('axios')

const q = 'Itu'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const appid = process.env.OPEN_WEATHER_API_KEY
const cnt = '2'
const unit = 'metric'
const lang = 'pt_br'

const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${unit}&lang=${lang}`

console.log(url)

// Promises ===================================================================================

/*

axios.get(url)
.then((res) => {
    const data = res['data']
    console.log(data)
    return data
})
.then((data) => {
    console.log(`cnt: ${data.cnt}`)
    return data
})
.then((data) => {
    console.log("\Temperatura máxima =========================")
    console.log(`Temp max: ${data.list[0].main.temp_max}\u00B0`)
    return {list: data.list, sunrise: data.city['sunrise'], sunset: data.city['sunset']}
})
.then((res) => {

    console.log("\nPrevisões =================================")
    res.list.forEach(item => {
        console.log(`Descrição: ${item.weather[0].description}`)
        console.log(`Sensação Térmica: ${item.main.feels_like}\u00B0`)
    });

    console.log("\nNascer e Por do Sol =======================")

    const sunrise_time = new Date(res.sunrise * 1000).toLocaleTimeString('pt-BR');
    console.log(`Nascer do sol ☀️ : ${sunrise_time}`);

    const sunset_time = new Date(res.sunset * 1000).toLocaleTimeString('pt-BR');
    console.log(`Por do sol    🌑: ${sunset_time}`)

})

*/

// Async/Await ========================================================================

const fatorial = (n) => {
    if (n < 0) return Promise.reject('Apenas valores positivos')
    let res = 1
    for (let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

const comThenCatch = () => {

    fatorial(10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))

    fatorial(-10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))

}

// comThenCatch()

const comAsyncAwait = async () => {

    // Case: RESOLVED

    try {
    
        const f1 = await fatorial(10)
        console.log(`Resultado: ${f1}`)

    } catch (err) {

        console.log(err)

    }

    // Case: REJECTED

    try {

        const f2 = await fatorial(-10)
        console.log(`Resultado: ${f2}`)

    } catch (err) {

        console.log(`Erro: ${err}`)

    }

}

comAsyncAwait()