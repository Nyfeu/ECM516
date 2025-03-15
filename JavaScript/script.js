/*=======================================================================
                Aula 01 - Introdução ao JavaScript 
=======================================================================*/

/* Declarando constantes ==============================================*/ 

// @note Equivalente à: final String nome, em Java.

const nome = 'José'
console.log(nome)

/* Tentando modificar uma constante ===================================*/

// @note A tentativa de alteração de uma constante gera uma execeção.

try {
    
    nome = 'Pedro'

} catch (error) {
    
    console.log('WARNING: Tentativa de modificação de constante!')

}

/* Utilizando pacotes através do npx ==================================*/

/*

> npx cowsay Muuuu

 _______
< Muuuu >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

*/

/* Strings formatadas ==================================================*/

let username = "André"
console.log(`Olá, ${username}!`)

/* Diferenças entre let e var ==========================================*/

// @brief O var é uma palavra restrita antiga e que pode apresentar
//        comportamentos estranhos.

// @note  Redefinindo uma variável já existente...

var idade = 23
console.log(`Idade: ${idade}`)

var idade = 24
console.log(`Idade: ${idade}`)

// @note  Não obedece a lógica de escopos da linguagem

var idade = 18
console.log(`Oi, ${user}.`)

if (idade >= 18) {
    var user = 'Kusko'
    // hoist: içamento
    console.log(`Parabéns, ${user}. Você pode dirigir.`)
}

console.log('Tchau, ' + user + '.')

/* Coerção Implícita ===================================================*/

// @brief O ambiente JavaScript decide como lidar com diferentes tipos:

const n1 = 2
const n2 = '3'

const n3 = n1 + n2
console.log(`Coerção implícita: ${n3}`)

/* Coerção Explícita ===================================================*/

// @brief É definida a abordagem explicitamente:

const n4 = n1 + Number(n2)
console.log(`Coerção explícita: ${n4}`)

/* Igualdade ===========================================================*/

// @brief Existem dois operadores '==' e '==='.

// @note O operador '==' aplica uma coerção implícita, trazendo um
//       comportamento bastante instável

console.log(`1 == 1 : ${1 == 1}`)       // Sem problemas
console.log(`1 == '1' : ${1 == '1'}`)   // Contra-indicado
console.log(`true == 0 : ${true == 0}`)
console.log(`true == 1 : ${true == 1}`)
console.log(`true == 2 : ${true == 2}`)
console.log(`1 == [1] : ${1 == [1]}`)
console.log(`[] == [] : ${[] == []}`)

// @note O operador '===' compara primeiro o tipo antes de verificar 
//       o valor efetivamente

console.log(`1 === 1 : ${1 === 1}`)
console.log(`1 === '1' : ${1 === '1'}`) // Verifica o tipo!

/* null e undefined ====================================================*/

// @brief Existe uma diferença conceitual entre esses tipos.

// @note Null refere-se a uma variável definida, mas não atribuída.

// @node Undefined refere-se a uma variável que não foi definida.

console.log(undefined == null)
console.log(undefined == undefined)
console.log(null == null)

v1 = []
v1[0] = 3.4
v1[2] = 'abc'

console.log(v1)

console.log("Conteúdo detalhado:")
for(let i = 0; i < v1.length; i++)
    console.log(v1[i])

/* Functions ===========================================================*/

// @brief Existem dois tipos principais: regulares e arrow functions.

function hello() {
    console.log("Esta é a função 'hello'")
}

hello() // Faz a chamada da função

function hello(nome) {
    console.log("Oi, " + nome + "!")
}

hello('André')

function soma(a, b = 0, c = 0) {
    return a + b + c
}

console.log(soma(2))
console.log(soma(2,3))
console.log(soma(2,3,5))

// @note A função hello() é sobrescrita pela segunda passagem do JavaScript.
// @note A sobrecarga da função não pode ser realizada com funçoes regulares.

// @brief Uma função anônima pode ser atribuída a uma variável e chamada 
//        a partir dela.

const triplo = function(n = 5) {
    return 3 * n
}

console.log(triplo(10))
console.log(triplo())

// @brief Uma arrow function é presentada por: () => {} onde há um corpo 
//        e uma lista de parâmetros.

const arrow1 = () => {
    console.log("Esta é a função arrow1!")
}

arrow1()

const arrow2 = a => {
    console.log(`Parâmetro: ${a}`)
    console.log("Quando há somente um parâmetro, pode-se omitir os parêntesis.")
}

arrow2()

const arrow3 = (a, b) => {
    console.log(`Parâmetro: ${a}`)
    console.log(`Parâmetro: ${b}`)
    console.log("Quando há múltiplos parâmetros, deve-se usar parêntesis.")
}

arrow3()

const arrow4 = (a = 10) => {
    console.log(`Parâmetro: ${a}`)
    console.log("Quando há valor padrão, não se pode omitir os parêntesis.")
}

arrow4()

const arrow5 = () => {return 3}
console.log(`Pode ser usada para retornar um valor: ${arrow4()}`)

arrow5()

const arrow6 = () => 2 + 2
console.log(`Return pode ser explícito quando há somente uma operação: ${arrow5()}, deve-se omitir as chaves.`)

arrow6()

/* Iteração sobre vetor ================================================*/

// @brief Pode-se iterar sobre um vetor, em um ciclo de repetição,
//        utilizando-se da palavra reservada 'of'

const nomes = ["Leo", "Andre", "Alexandre", "Durval", "Estevan"]
let nomes_a = []

for (const nome of nomes) {
    if (nome.charAt(0) === 'A') {
        nomes_a.push(nome)
    }
}

console.log(nomes_a)

/* Utilizando 'filter' e predicados ====================================*/

// @brief Pode-se filtrar valores em uma estrutura utilizando filtros,
//        onde a condição é definida a partir de uma arrow function.

nomes_a = nomes.filter(nome => nome.startsWith('A') || nome.startsWith('a'))

console.log(nomes_a)

/* Utilizando 'map' e predicados =======================================*/

let letras_iniciais = []

for (const nome of nomes) {
    letras_iniciais.push(nome.charAt(0))
}

console.log(letras_iniciais)

// @brief Pode-se aplicar funções sobre um arranjo utilizando 'map'

letras_iniciais = nomes.map(nome => nome.charAt(0))

console.log(letras_iniciais)

/* Produzindo valore booleanos =========================================*/

// @brief Pode-se gerar valores booleanos a partir da verificação 
//        de arranjos, através de predicados

// @note  Verificando se todos iniciam com uma letra

console.log(nomes.every(n => n.startsWith('a') || n.startsWith('A')))

// @note  Verificando se ao menos um inicia com a letra

console.log(nomes.some(n => n.startsWith('A') || n.startsWith('a')))

/* Reduzindo coleções ==================================================*/

// @brief A redução consiste em iterar entre os valores e acumulando 
//        um resultado. Realizando-se uma soma dos elementos da 
//        coleção, tem-se um valor reduzido: a 'soma' a partir de todos
//        os elementos - portanto, reduzindo-se a coleção

const valores = [1, 2, 3, 4]

let soma_result = valores.reduce((ac, n) => ac + n)

console.log(soma_result)

// @note  Pode-se definir um valor inicial:

let identity = valores.reduce((ac, n) => ac * n, 0)
console.log(identity)

let mult_result = valores.reduce((ac, n) => ac * n, 1)
console.log(mult_result)

/* Trabalhando com funções =============================================*/

// @brief 

// @note  Armazenando uma função em uma variável

let oneFunc = function() {
    console.log('Fui armazenada em uma variável!')
}

oneFunc()

// @note  Executando uma função passada como argumento

function h(funcao) { funcao() }

h(oneFunc)

// @note  Gerando uma função a partir de outra (retornando)

function j() {
    return function() {
        console.log('Fui criada por g')
    }
}

h(j())

// @note  Toda função, implicitamente retorna 'undefined'

console.log(j()())

// @note  Desafio (AULA):

function f(funcao) { return funcao() }

function g() {
    return () => { return () => 1 }
}

console.log(f(g()()))

/* Closures ============================================================*/

// @brief Uma função interna em conjunto com as variáveis de seu escopo 
//        externo é chamado de 'Closure'

function k() {

    let nome = 'João'
    return function() {
        console.log(nome)
    }

}

k()()

// @brief Pode-se utilizar closure da seguinte forma:

const saudacoesFactory = (saudacao, nome) => {

    return function() {
        console.log(`${saudacao}, ${nome}`)
    }

}

let saudacao_ola = saudacoesFactory("Olá", "João")
saudacao_ola()

let saudacao_adeus = saudacoesFactory("Adeus", "João")
saudacao_adeus()

// @note  Ou seja, uma closure é combinação de uma função
//        e todas suas referências.

// @brief Devolvendo múltiplas closures:

function eAgora() {

    let cont = 1

    let f1 = () => console.log(cont)

    cont++

    let f2 = () => console.log(cont)

    return {f1, f2}

}

const eAgoraResult = eAgora()

eAgoraResult.f1()
eAgoraResult.f2()

// @note  Isso destaca o fato de que a referência
//        é atrelada ao closure e não somente o valor.
//        Isto é, se o valor contido pela referência é alterado,
//        então, é alterado para todas as funções.

function shared() {

    let cont = 0

    let increase = () => cont++
    let display  = () => console.log(cont)

    return {increase, display}

}

const sharedResult = shared()

sharedResult.display()
sharedResult.increase()
sharedResult.display()


/* Objects =============================================================*/

// @brief Criando uma instância de objeto JavaScript  

const pessoa = {
    nome: "João",
    idade: 17
}

console.log(pessoa.nome)
console.log(pessoa['idade'])

// @brief Criando uma composição de objetos

const pessoa2 = {
    nome: "Maria",
    idade: 21,
    endereço: {
        logradouro: "Rua B",
        numero: 121,
        bairro: {
            nome: "J"
        },
        cidade: {
            nome: "Itu",
            populacao: 70000
        }
    }
}

console.log(pessoa2.endereço.bairro.nome)

// @note  Pode-se utilizar dois tipos de referência a
//        atributos JavaScript

console.log(pessoa2.endereço.cidade.populacao)
console.log(pessoa2.endereço['cidade'].nome)
console.log(pessoa2['endereço']['cidade']['nome'])

// @note  O uso do formato ['texto'] aceita caracteres especiais

// @note  Usando array lists como atributo (coleções)

const concessionaria = {
    CNPJ: "123",
    endereço: {
        logradouro: "Rua A",
        numero: 1,
        bairro: {
            nome: "A"
        },
        cidade: {
            nome: "São Paulo",
        }
    },
    carros: [
        {
            marca: "Toyota",
            modelo: "Prius",
            fabricação: "2018"
        },
        {
            marca: "Toyota",
            modelo: "Hillux",
            fabricação: "2020"
        }
    ]
}

console.log(concessionaria)

console.log("Carros da concessionária: ")
for (let carro of concessionaria.carros) 
    console.log('- ' + carro.marca + ' ' + carro.modelo + ' (' + carro.fabricação + ')')

// @note  Definindo métodos para um objeto

const calculadora = {

    soma: function(a, b) {
        return a + b
    },

    subtracao: (a, b) => a - b

}

console.log(calculadora.soma(2,3))
console.log(calculadora.subtracao(5,3))

class calc {

    static soma(a,b) {
        return a + b
    } 

    static subtracao(a,b) {
        return a - b
    }

}

console.log(calc.soma(2,3))
console.log(calc.subtracao(5,3))

// @note  Classe em JavaScript

class carro {

    constructor(marca, modelo, fabricacao) {
        this.marca = marca
        this.modelo = modelo
        this.fabricacao = fabricacao
    }

    toString() {
        return `${this.marca} ${this.modelo} (${this.fabricacao})`
    }

}

carro_instance = new carro("Toyota", "Hillux", "2020")
console.log(carro_instance.toString())

/* Processamento síncrono e assíncrono =================================*/

const oi = () => console.log('oi')

console.log('Começou...')
oi()
console.log('Terminou...')

// @note  IO-Bound:  Input/Output
//        CPU-Bound: Processamento

// @note  readFile: assíncrona IO-Bound

const fs = require('fs')
const openFile = (path) => {

    // Callback function
    const displayContent = (err, content) => {

        if (err) console.log(`${err}`)
        else {
    
            console.log(`Funcionou: ${content.toString()}`) 
            const dobro = Number(content.toString()) * 2

            fs.writeFile('arquivo_result.txt', dobro.toString(), (err) => {

                if (err) console.log(`${err}`)
                else console.log("Arquivo escrito com sucesso!")
            
            })

        }

    }   
    
    // Assíncrona

    fs.readFile(path, displayContent)
    console.log('Fim da função displayContent')

}

openFile('arquivo_inexistente.txt')
openFile('arquivo.txt')

// @note  A string de final de execução da função será
//        exibida antes do conteúdo lido, por conta do
//        comportamento assíncrona.

