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

