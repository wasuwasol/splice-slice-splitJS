




//  Imaginemos que tenemos una pizza 🍕 cortada en 8 porciones y hay que repartir las porciones



/*
* SPLICE
*/

//  SPLICE tiene los siguientes parámetros   unArray.splice(índice desde donde quiero sacar elementos, cantidad de elementos para sacar, elementos para agregar al array) 3er parametro opcional
//  si usamos el método SPLICE, vamos a SACAR los elementos que queremos de nuestro array original,
//  CUT PASTE?? 🤔
//  esos elementos que sacamos con SPLICE se alojan en un array nuevo, el cual es aconsejable guardarlo en un array o variable nueva
//  Tambien se pueden REMOVER los elementos desde el final del array hasta el principio, pasando valores negativos a los parametros
//  unArray.splice(-2, -1) me retorna el penultimo elemento del array
//  unArray.splice(-1) me retorna el ultimo elemento del array


const pizzaEnSplice = ['🍕1', '🍕2', '🍕3', '🍕4', '🍕5', '🍕6', '🍕7', '🍕8'];

const spliceMachine = {
    primerEjemplo: function (pizza) {
    debugger;
        for (let i = 0; i < pizza.length; i++) {
            let mitadDeLaPizza = pizza.splice([i], 4)
            console.log(mitadDeLaPizza);
            --i;
        }   
    },
    segundoEjemplo: function (pizza) {
    debugger;
        for (let i = 0; i < pizza.length; i++) {
            let mitadDeLaPizza = pizza.splice([i], 4);
            console.log(mitadDeLaPizza);
            --i;
        }   
        if (pizza.length < 3) {
            pizza.splice('', '', '🍕1', '🍕2', '🍕3', '🍕4', '🍕5', '🍕6', '🍕7', '🍕8'); //1er y 2do parametro mantienen la misma funcionalidad, REMOVER
            console.log(pizza);
        }
    },
    repartirEntreDos: function(pizza) {
    debugger;
        let invitados = ['pepe', 'claudio'];
        for (let i = 0; i <= invitados.length; i++) {
            if (pizza.length >= 8) {
                let mitadDeLaPizza = pizza.splice([i], 4);
                console.log(invitados.splice(0,1),mitadDeLaPizza);
            } else {
                console.log(invitados.splice(0,1),pizzaEnSplice);
            }
        }
    },
    repartirEntreVarios: function(pizza) {
    debugger;
        let invitados = ['pepe', 'claudio','dora', 'laura'];
        let pizzaCompleta = pizza.length;
        let comensales = invitados.length;

        for (let i = 0; i < pizza.length; i++) {
            let porcion = pizza.splice([i], pizzaCompleta / comensales);
            console.log(invitados.splice([i], 1),porcion);
            // console.log(pizzaEnSplice);
            --i;
        }
    },
}

// spliceMachine.primerEjemplo(pizzaEnSplice);
// spliceMachine.segundoEjemplo(pizzaEnSplice);
// spliceMachine.repartirEntreDos(pizzaEnSplice);
// spliceMachine.repartirEntreVarios(pizzaEnSplice);





/*
* SLICE
*/



// SLICE funciona con dos parametros miArray.slice(primerIndiceQueAgarra, hastaQueIndiceAgarra)
// 1er parametro toma el indice de mi array donde comienza a fijarse, 
// si no defino mi segundo parametro SLICE va a agarrar todo desde el indice del primer parametro hasta el final
// 2do parametro indica el indice hasta donde va a agarrar elementos.
// SLICE agarra los elementos de tu array y hace una copia de esos elementos y te devuelve un array nuevo con esas copias
// SLICE conserva tu array original y te devuelve una copia con los elementos que vos le pedis
// COPY PASTE?? 🤔
// Tambien se pueden clonar los elementos desde el final del array hasta el principio, pasando valores negativos a los parametros
// miArray.slice(-2, -1) me retorna el penultimo elemento del array
// miArray.slice(-1) me retorna el ultimo elemento del array


const pizzaEnSlice = ['🍕1', '🍕2', '🍕3', '🍕4', '🍕5', '🍕6', '🍕7', '🍕8'];

const sliceMachine = {
    ejemploSlice: function (pizza) {
    debugger;    
        let mitadClonadaDeLaPizza = pizza.slice(0, 4)
        console.log(mitadClonadaDeLaPizza);
        console.log(pizza);
        
    },
    servicioCatering: function (pizza) {
    debugger;
        let invitados = ['👰🏻 1', '🤵🏻 2', '👨🏽 3', '👩🏻 4', '👩🏻 5', '👨 6', '👩🏾 7', '👨🏻 8', '👩 9', '👩🏼 10', '👨🏽 11', '👩🏻 12', '👽 13', '👨🏻 14', '👩🏾 15', '👨 16', '👩🏼 17', '🤖 18', '🎅🏻 19', '🕺🏿 20'];
        let i = '';
        let p
        let x
    for (let e = 0; e < invitados.length; e++) {
            // if (i === '') {
            //     i = 1;
            //     p = 0;
            //     x = 2;
            // }
            // let servicio = [invitados.slice([e],[i])+' '+pizza.slice([p],[x])];
let servicio = [invitados.slice([e],1)+' '+pizza.slice(0,2)];      
console.log(servicio);
            // ++i;
            // p = p+2;
            // x = x+2;


            // if (p > 6 && x > 8 ) {
            //     p = 0;
            //     x = 2;
            // }
    }
    }
}


// sliceMachine.ejemploSlice(pizzaEnSlice);
// sliceMachine.servicioCatering(pizzaEnSlice);




/*
* SPLIT
*/


// El metodo SPLIT agarra una cadena de caracteres y lo transforma en un array
// SPLIT tiene dos parametros posibles   miArray.split(separador, limite)
// 1er parametro, especifica el caracter que estas usando para separar cada elemento, puede ser una coma, un espacio, lo que sea
// 2do parametro, numero entero que delimita cuantos caracteres del string vamos a convertir en elementos de un array

const pizzaEnSplit = '🍕1 🍕2 🍕3 🍕4 🍕5 🍕6 🍕7 🍕8';
// const pizzaEnSplit = '🍕1,🍕2,🍕3,🍕4,🍕5,🍕6,🍕7,🍕8';
// const pizzaEnSplit = '🍕1t🍕2t🍕3t🍕4t🍕5t🍕6t🍕7t🍕8';
// const pizzaEnSplit = '🍕1'+ '🍕2'+ '🍕3'+ '🍕4'+ '🍕5'+ '🍕6'+ '🍕7'+ '🍕8';



const splitMachine ={
    ejemploSplit: function (pizza) {
    debugger;
        let cambio = pizza.split(' ');
        // console.log(pizza.split(''));
        console.log(cambio);
    },
    dadoVuelta: function (pizza) {
        let cambio = pizza.split(' ');
        cambio.reverse();
        console.log(cambio);
        // let cadena = cambio.join();
        // console.log(cadena);
    }
}


// splitMachine.ejemploSplit(pizzaEnSplit);
// splitMachine.dadoVuelta(pizzaEnSplit);