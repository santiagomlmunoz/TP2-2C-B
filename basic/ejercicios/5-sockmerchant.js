var array = crearArray(10)

console.log(array)

console.log(posiblesPares(array))

function posiblesPares(array){
    var cont = 0;
    var par;
    var a = 0;
    var b = 0;

    while(a < array.length){
        var auxA = array[a];
        par = false;
        while(b < array.length){
            var auxB = array[b];
            if(a != b && auxA == auxB && !par){
                console.log(auxA, auxB)
                array.splice( a, 1 );
                array.splice( b, 1 );
                cont++;
                par = true;
            }
            b++;
        }
        b = 0;
        if (!par){
            a++;        
        }
    }
    return cont;
}

function crearArray(num){
    var array = [];
    for(a = 0; a < num; a++){
        array[a] = getRandomInt(1,10); 
    }
    return array;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}