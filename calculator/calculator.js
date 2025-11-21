class calculator{

    static add(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }

    static subtract(firstNumber, secondNumber){
        return firstNumber - secondNumber;
    }

    static multiply(firstNumber, secondNumber){
        if(firstNumber === 0 || secondNumber === 0) return 0
        return (Number(firstNumber) * Number(secondNumber))
    }

    static divide(firstNumber, secondNumber){
        if(secondNumber === 0) return 'Cannot divide by zero'
        if(firstNumber === 0) return 0
        return (Number(firstNumber) / Number(secondNumber));
    }
}

module.exports = calculator;