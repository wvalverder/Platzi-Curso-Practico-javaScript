const lista1 = [ 100 , 200 , 500 , 800, 4000000];

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
        
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
      sumaLista = sumaLista + lista[i];
    }
    
    const promedioLista = sumaLista/lista.length;
      return promedioLista;
}

let mediana;


if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioelemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioelemento1y2;
} else {
    mediana = lista1[mitadLista1];
}

//nota : para que la mediana funcione , en el caso de nuestro ejemplo los elementos deben estar ordenados de menor a mayor.. para lograr esto se puede usar el metodo de los arrays sort()