let resultado = catAndMouse(1,4,3);

function catAndMouse(x,y,z){
    let distA = (x-z); 
    let distB = (y-z);
    if (distA < 0){
        distA = distA * -1
    }
    
    if (distB < 0){
        distB = distB * -1
    }

    if(distA < distB){
        return "A";
    }
    if(distA > distB){
        return "B";
    }
    else 
        return "C";
}

console.log(resultado);

