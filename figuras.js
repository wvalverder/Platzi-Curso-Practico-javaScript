//codigo del Cuadrado

console.group("Cuadrados");

/*const ladoCuadrado = 5;

console.log("Lado del Cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado *4;*/

function perimetroCuadrado(lado) {

    return lado*4;

}

function areaCuadrado(lado) {
    return (lado*lado);
}
//console.log("El perimetro es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado*ladoCuadrado;

//console.log("El area del cuadrado es: " + areaCuadrado + "cm*cm");

console.groupEnd();

//codigo del Triangulo.

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.6;

console.log("Los lados del Triangulo miden: " + ladoTriangulo1 + "cm ," + ladoTriangulo2 + "cm ," + baseTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTrinagulo = baseTriangulo*alturaTriangulo/2;

console.log("El area del triangulo es: " + areaTrinagulo + "cm*cm");

console.groupEnd();*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;

}

console.groupEnd();

console.group("Circulos");

const PI =Math.PI;

function perimetroCirculo(radio) {
    return 2*PI*radio;
}

function areaCirculo(radio) {
    return (PI*radio*radio);
}

/*const radioCirculo = 4;

const pi = Math.PI;

console.log("El radio del Circulo es: " + radioCirculo + "cm");

const longitudCircular = 2*pi*radioCirculo;

console.log("La longitud del Circulo es: " + longitudCircular + "cm")

const areaCircular = pi*radioCirculo*radioCirculo;

console.log("El area del Circulo es: " + areaCircular + "cm*cm");*/

console.groupEnd();

