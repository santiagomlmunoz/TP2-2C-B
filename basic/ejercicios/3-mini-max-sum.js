const array = [95,2,56,4,-5]

var elMayor = 0;
var elMenor = array[0];
var sumaSinMenor = 0;
var sumaSinMayor = 0;
var posicionMenor;
var posicionMayor;

for (a = 0; a < array.length; a++){
    var aux = array[a];
    console.log ("en " + a + " vale " + aux)
    if(aux > elMayor){
        elMayor = aux;
        posicionMayor = a;
    }

    if(aux < elMenor){
        elMenor = aux;
        posicionMenor = a;
    }
}

console.log("el menor es " + elMenor + " en la posicion " + posicionMenor);

console.log("el mayor es " + elMayor + " en la posicion " + posicionMayor);

for (a = 0; a < array.length; a++){
    var aux = array[a];
    if (a != posicionMenor){
        sumaSinMenor += aux;
    }
    if (a != posicionMayor){
        sumaSinMayor += aux;
    }
}

console.log("suma sin el menor: " + sumaSinMenor)
console.log("suma sin el mayor: " + sumaSinMayor)