/**
 * UNION
 * --------
 * La asignacion de tipo union es representado por 'pipe' (|)
 * que quiere decir que la variable puede aceptar
 * uno o varios tipos de datos
 * eg. let edad: number|string
 *      edad = 3 !! OK
 *      edad = 'tres' !! OK 
 */

type Combinable =  number | string // Alias con union type de number and string.
type Conversion = 'as-number'|'as-text'// Alis con union type de literal types.

function combine(
        input1: Combinable,
        input2: Combinable,
        typeOperation: 'as-number'|'as-text' //<- Literal type on union type
    ){
        let result
        if( typeof input1 === 'number' && typeof input2 === 'number' || typeOperation === 'as-number'){
            result = +input1 + +input2
        } else {
            result = input1.toString() +' '+ input2.toString()
        }
        return result
}

const combineAges = combine(30, 26, 'as-number')
console.log(combineAges)

const combineNames = combine('Alexis','Rafael', 'as-text')
console.log(combineNames)

const combineStringNumbers = combine('10','50', 'as-number')
console.log(combineStringNumbers)


/**
 * LITERAL TYPE
 * -------------
 * Son tipo de variable que no solo matiene el tipo de dato
 * si no tambien el valor exacto. Es muy usado en 'union types'
 * eg. const numero1 = 4 -> Este es de tipo number y su valor 4. 
 *      el ejemplo de arriba es igual a decir:
 *         let numero1: 4 
 *               numero1= 4 !! OK
 *               numero1= 2 !! ERROR
 * const typeOperation: 'as-number'|'as-text'
*/

/**
 * ALIASES TYPE
 * ------------
 * Alias type es un tipo que puedes espeficar y que lo puedes reutilizar donde 
 * sea.
 * 
 * sintax
 * type Nombre =  data type 
 * 
 * eg type Combinable = number | string
 *  
 */