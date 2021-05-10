/**
 * Object type
 * -----------
 * Object type es un tipo de data que typescript puede inferir
 * el tipo de dato implicitamente segun el valor de la llave.
 * const person = {
        name : 'Rafael', -> name es de tipo string.
        age: 30 -> age es de tipo number.
    }

* const person: { -> No es buena práctica, dejemos que TS infiera.
    name: string;
    age: number;
} => {
    name: 'Rafael',
    age: 30
}
 */

const person = {
    name : 'Rafael',
    age: 30,
    hobbies: ['Running', 'Reading'],
    role: [2, 'author']
}

/**
 * Los objects type deben de cumplir con las key:type y
 * con los campos que fueron creados.
 * 
 * const person = {
    name : 'Rafael',
    age: 30
}
 * 
 * person.nickname -> Este campo no existe.
 */
console.log(person.name)

/**
 * ARRAY
 * ------------
 * Arrays TS infiere el tipo de arreglo según el valor
 * en los corchetes.
 * const hobbies= ['Running', 'Reading'] -> string[]
 *  explicitamente
 * const hobbies: string[] = ['Running', 'Reading']
 *  En este caso estamos diciendo que el arreglo hobbies
 *  será de tipo strings y solo podra recibir tipo string.
 
*   Además solamente podras acceder a métodos que estan
    relacionados con los string. 
    hobbies[0].map() !!ERROR!!
    hobbies[0].toUpperCase() !!OK

    Para declarar arreglos de otro tipo es igual 
    en los diferentes tipos number, string, boolean

    Crear un arreglo con diferentes tipos de datos
    utilizamos el tipo de dato any[]

    let favoritesactivities : any[]
    favoritesactivities = ['String', 2]
 */

    let favoritesactivities : string[]
    favoritesactivities = ['Play soccer']
    favoritesactivities.push('Watch TV')
    for(const activity of favoritesactivities){
        console.log(activity.toUpperCase())
        // activity.map() !!ERROR
    }

    /**
     * TUPLE
     * ----------
     * Es una nuevo tipo de valor no soportado por JS
     * pero si para TS. Es un tipo de arreglo pero es de
     * longitud y tipo de dato fija.
     * 
     * ej. let role: [number,string] = [2, 'Student']
     * 
     * role.push('hola') !! OK
     * role[0] = 'Enginner' !! ERROR
     * role =  ['Enginner', 10] !! ERROR
     * role =  [2, 'hola'] !!OK
     */

    let role: [number,string] = [2, 'Student']
    role = [34, 'Enginner']


    /**
     * ENUMS
     * ----------
     * Agregado por TypeScript utlizando la palabra reservada
     * enum seguido del Nombre con mays. y llaves con el nombre de los 
     * identificadores. Automaticamente enumera los constantes
     * globales empezando por el 0 o asignarselo. Además de 
     * combinar los diferentes tipos de valores.
     * enum Name { NEW, OLD} -> const NEW = 1, OLD = 2
     * enum Name { NEW = 'NEW', OLD ='OLD', STUDENT = 1 } -> mix
     */


    /**
     * ANY
     * -----------
     * Es el tipo de dato que acepta cualquier tipo de dato.
     * Es demasiado flexible. Es buena practica tratar de
     * evitar éste tipo de dato.
     */

    