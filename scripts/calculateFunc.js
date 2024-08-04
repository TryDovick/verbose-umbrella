const OPERATIONS = {
    sum: "+",
    minus: "-",
    multiplication: "*",
    division: "/",
    squar: "**"
};

function calculate({a, b, operation}){
    let result = null;

    switch (operation){
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        
        case OPERATIONS.minus:
            result = minus(a, b);
            break;

        case OPERATIONS.multiplication:
            result = multiplication(a, b);
            break;
        
        case OPERATIONS.division:
            result = division(a, b);
            break;
        
        case OPERATIONS.squar:
            result = squar(a, b);
            break;

        default:
            break;
        
    }

    return result;

}

