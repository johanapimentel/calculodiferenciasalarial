const panama = [];
panama.push({ name: "Pedro", salary: 1500 });
panama.push({ name: "Roberto", salary: 500 });
panama.push({ name: "Maria", salary: 1400 });
panama.push({ name: "Petra", salary: 1280 });
panama.push({ name: "Luisa", salary: 1310 });
panama.push({ name: "Alberto", salary: 3500 });
panama.push({ name: "Mariano", salary: 1580 });
panama.push({ name: "Juan", salary: 1670 });
panama.push({ name: "Vicente", salary: 5500 });
panama.push({ name: "Juanita", salary: 2100 });
panama.push({ name: "Natalia", salary: 300 });
panama.push({ name: "Johana", salary: 100 });
panama.push({ name: "Gina", salary: 150 });
panama.push({ name: "Romero", salary: 320 });
panama.push({ name: "Yurleidys", salary: 320 });

let listaSalarios = panama.map(function (persona) {
  return persona.salary;
});
let salariosOrdenados = listaSalarios.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function parInpar(num) {
  return (num % 2 === 0);
}

function mediana(lista) {
    let mitad = Math.floor(lista.length/2);
    if(parInpar(lista.length)){
        console.log("Media: " + ((lista[mitad]+lista[mitad-1])/2));
    } else {
        console.log("Media: " + lista[mitad]);
    }
}

mediana(salariosOrdenados);