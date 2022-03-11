function checkEmail(email) {

    // validate @ .
    var re = /\S+@\S+\.\S+/

    // validate @
    var re1 = /\S+@\S+/

    if (re.test(email) == true) {
        return ('VALID')
    } else if (re1.test(email) == true) {
        return 'INVALID'
    } else {
        return 'ERROR: Invalid data type'
    }
}

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());

