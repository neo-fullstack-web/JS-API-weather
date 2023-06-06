console.time('delayedName')
let products;
// let lateName;
function esperarResultado() {

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            products = ['XBOX', 'PS5', 'Nintendo', 'Family'];
            // lateName = 'Delayed user';
            resolve()
        }, 4000);
    });

}

esperarResultado()
    .then(() => {
        console.log(`Se resolvió`);
        products.forEach(prod => console.log(prod));

    }).catch(function(error)  {
        console.warn('La promesa falló', error)
    })
// esperarResultado()
//     .then((resolucion) => {
//         console.log(`La promesa se resolvió: ${lateName}`)
//     })
//     .catch(error => console.warn(error))

// console.log();
// console.log(lateName)


console.log(`Una respuesta desde mi script`)
console.log(`Una respuesta para ${name}`)

