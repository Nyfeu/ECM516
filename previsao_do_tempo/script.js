require('dotenv').config();

const q = 'Itu'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const appid = process.env.OPEN_WEATHER_API_KEY
const cnt = '2'
const unit = 'metric'
const lang = 'pt_br'

const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${unit}&lang=${lang}`

console.log(url)

