// const isValidPassword = (email) => {
//     if (email) {
//         return "true"
//     } else if 
// }
// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function isValidPassword (givenPassword)
{
    // let regexGivenPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,}/; 
    if (typeof (givenPassword) !== 'string') {
        return 'ERROR : data type is INVALID'
    }else if(givenPassword.length >= 8 && givenPassword.match(/[0-9]/g) && givenPassword.match(/[a-z]/g) && givenPassword.match(/[A-Z]/g)) {
        return 'true';
    }else {
        return 'false';
    }
}


console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());