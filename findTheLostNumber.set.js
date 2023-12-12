/**
 * Encuentra el número único en un conjunto de números enteros,
 * donde todos los números están presentes dos veces, excepto uno.
 * 
 * @param {number[]} arr - El conjunto de números enteros.
 * @returns {number|null} - El número único o null si no se cumple con las condiciones.
 */
function findTheLostNumber(arr) {
  // se valida que el conjunto contenga un número de elementos impares mayores a 3
  if (arr.length < 3 || arr.length % 2 === 0) {
    console.log("El conjunto no debe estar vacío y debe contener un número impar de elementos");
    return null;
  }
  
  let unique = new Set();

  for (let num of arr) {
    // se valida que cada elemento sea un número entero
    if (isNaN(num) || !Number.isInteger(num)) {
      console.log("El conjunto debe contener solo números enteros");
      return null;
    }
    // los elementos únicos se añaden al set y los repetidos se eliminan
    if(unique.has(num)){
      unique.delete(num);
    }else{
      unique.add(num);
    }
  }
  
  // se valida que el conjunto set unique contenga solo un elemento único y se retorna
  if( unique.size === 1 ){
    return unique.values().next().value;
  }else{
    console.log("El conjunto contiene mas de un número único.");
    return null;
  }

}

module.exports = findTheLostNumber;

const conjunto = [1, 3, 2, 4, 2, 1, 3];
const numeroUnico = findTheLostNumber(conjunto);
console.log("El número único es:", numeroUnico);