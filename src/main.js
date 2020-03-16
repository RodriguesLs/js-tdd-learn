const fizzbuzz = (num) => {

    if(num === 0) return num;
    
    if(num % 3 === 0) {
        if(num % 5 === 0) 
            return 'fizzbuzz';
        return 'fizz';
    }
    if(num % 5 === 0) return 'buzz';
    
    return num;
}

export default fizzbuzz;