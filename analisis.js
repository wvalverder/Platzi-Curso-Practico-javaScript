const salariosPer = peru.map( 
    function(personita) {
        return personita.salary;
    });

    const salariosPerSorted = salariosPer.sort(function (salaryA,salaryB){
        return salaryA - salaryB;
    });

    function esPar(numerito) {
        return (numerito % 2 === 0);
    }

    function calcularMediaAritmetica(lista) {
        let sumaLista = 0;
        for(let i = 0; i < lista.length; i++) {
          sumaLista = sumaLista + lista[i];
        }
        
        const promedioLista = sumaLista/lista.length;
          return promedioLista;
    }

    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length/2);
        if (esPar(lista.length)) {
            const personitaMitad1 = lista[mitad -1];
            const personitaMitad2 = lista[mitad];

            const mediana = calcularMediaAritmetica([personitaMitad1 , personitaMitad2]);

            return mediana;
        } else {
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }

    console.log(medianaSalarios(salariosPerSorted));