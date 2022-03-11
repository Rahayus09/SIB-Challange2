// const changeword = (selectedText, changeText, text)=>{

// }
// // const arr1 = ['Andini', 'sangat', 'mencintai', 'kamu', 'selamanya'];
// // arr1.splice(2, 1, 'membenci');
// // console.log(arr1.join(' '));


// const arr2 = ['Gunung', 'bromo', 'tak akan mampu menggambarkan besarnya cintaku padamu'];
// arr2.splice(1, 1, 'semeru',);
// console.log(arr2.join(' ')); 
function changedWord(selectText, changeText, text) {
    return text.split(selectText).join(changeText);
}
var kalimat1 = 'Andini sangat mencintai kamu selamanya';
var kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changedWord('mencintai', 'membenci', kalimat1));
console.log(changedWord('bromo', 'semeru', kalimat2));
