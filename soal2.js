const checkTypeNumber = (givenNumber) => {
    if (!givenNumber) {
        return "Error: Bro where is the parameter?";
    } else if (givenNumber % 2 == 0 && typeof(givenNumber) === "number") {
        return "GENAP";
    }else if(givenNumber % 2 == 1 && typeof(givenNumber) === "number") {
        return "GANJIL";
    }else {
        return "Error : Invalid data type"
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
