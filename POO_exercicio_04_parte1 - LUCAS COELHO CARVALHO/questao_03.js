var n = [10, 1, 20, 3, 30, 15, 25, 5, 7, 9];
function compararNumeros(a, b) {
    return a - b;
}
console.log('Array Crescente: ', n.sort(compararNumeros));
//-------------------------------------------------------------
var n2 = [10, 1, 20, 3, 30, 15, 25, 5, 7, 9];
function compararNumeros2(a, b) {
    return b - a;
}
console.log('Array Decrescente: ', n2.sort(compararNumeros2));
