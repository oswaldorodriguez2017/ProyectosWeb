
// console.log("Hola desde java script ");

//var x = true;
//var y = false;

//if(x){

//}
//else {

//}

//var numeros_pares = [2, 4, 6, 8, 10];

//console.log(numeros_pares);

//console.log(numeros_pares[3]);


var frutas = ['pera', 'manzana', 'piña','Melon'];

//console.log(frutas[1]);

//console.log(frutas.length);

// for(var i =0;i < frutas.length;i++)
//{
//  console.log("Fruta #" + i + " " + frutas[i]);
// }

// remove
// push

//frutas.splice(0, 3);

//console.log(frutas);

//frutas.push("Mango");

//console.log(frutas);

var frutas = {
    nombre: "Piña",
    sabor: "acido",
    peso: 1
};

//var canasta = {
//   precio: 100,
//   frutas: [fruta]
//};

var canasta = {
   precio: 100,
   frutas: [
        {
          nombre: "Limon",
          sabor: "acido",
          peso: 1
        }
        ,
        {
          nombre: "Pera",
          sabor: "Dulce",
          peso: 2
        }
   ]
};

console.log(canasta);

console.log(suma(5,10));

function suma(x, y){
   return x + y;
};
