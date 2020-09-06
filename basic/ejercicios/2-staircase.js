imprimirEscalera(20);


function imprimirEscalera(num){
    for (a = 1; a <= num; a++){
        for (b = 0; b < num; b++){
            if(num - a > b){
                process.stdout.write(" "); 
            }else{
                process.stdout.write("#"); 
            }
        }
        console.log();
    }
}
