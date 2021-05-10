/**
 * FUNCTION RETURN TYPES AND VOID
 * --------------------------
 * TS infiere el tipo de valor según el valor que
 * esta retornando la function.
 * Eg. function(num1, num2){
 *      return num1 + num2 -> Implicitamente el tipo es number
 *  }
 * 
 * Explicicamente podemos espeficicar el tipo de retorno al
 * final de la lista de parametos, seguido de ':' y 'value type'
 * Eg. function(num1, num2) : number {
 *      return num1 + num2 -> Implicitamente el tipo es number
 *  }
 * 
 * Cuando una funcion no retorna un valor 
 * por defecto es 'void'.
 */

function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12))


/**
 * FUNCTION TYPE
 * ------------
 * Describe una funcion con repecto a los parametros
 * y el valor de retorno.
 * 
 * let combineValues: (n1: number) => number
 */

let combineValues: (n1: number, n2: number) => number
combineValues = add
// combineValues = printResult

/**
 * FUNCTION CALLBACKS
 * -------------
 */

function addAndHandle (n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result)
}

