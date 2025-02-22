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
