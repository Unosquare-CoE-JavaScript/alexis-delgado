/**
 * Core types
 * ---------------
 * TypeScript nos ayuda a tener un código limpio, legible
 * para entender. Nos ayuda a prevenir errores de tipado en tiempo
 * de ejecución. Ya que el compilador detecta los errores
 * en tiempo de desarrollo.
 */

/**
 * Core Types son number, string y bolean
 * Los tipo numeros : 2, 2.5, -10 
 * Los tipo strings: `h1`, 'hi'. "hi"
 * Los tipo boleano: true y false
 */

function add(num1: number, num2: number, phrase: string, showResult: boolean){
    const result = num1 + num2

    if(showResult){
        console.log(phrase + result)
    } else {
        return result
    }
    return num1 + num2
}

/**
 * Type Inference
 * ---------------
 * TypeScript infiere el tipo de dato según el valor que sea inicializada la 
 * variable.
 * eg. const num1 = 2 -> number
 *      const printResult = true -> boolean
 * 
 * Para asignar el tipo de dato de manera explicita
 * utilizamos ':' seguido del tipo de dato 'numero, string, boleano'
 * eg. let num1: number
 *      let showResult: boolean 
 * 
 */

const num1 = 2
const num2 = 5.2
const printResult = true
const resultPhrase = 'Result is: '

const result = add(num1, num2, resultPhrase, printResult)
console.log(result)