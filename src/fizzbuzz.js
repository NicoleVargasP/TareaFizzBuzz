function convertirFizzBuzz(n) {
    if((n % 5 ===0) && (n % 3 ===0)){
        return "FizzBuzz"
    }
    else if (n % 3 === 0){
        return "Fizz"
    }
    else if(n % 5 === 0){
        return "Buzz"
    }
    else {
        return n + "";
    }
}
function fizzbuzz(n){ 
    let cadena = "" 
    for (let i = 1; i <= n; i++) {
        cadena += convertirFizzBuzz(i); 
        if (i != n) {
            cadena += ", "
        }    
    }
    return cadena; 
}
export {convertirFizzBuzz, fizzbuzz};