const findTheLostNumberSet = require('./findTheLostNumber.set.js');
const findTheLostNumberXor = require('./findTheLostNumber.xor.js');

describe('findTheLostNumber using Set', () => {
  test('Encuentra el número único en un conjunto válido', () => {
    expect(findTheLostNumberSet([1, 3, 2, 4, 2, 1, 3])).toBeDefined();
    expect(findTheLostNumberSet([1, 3, 2, 4, 2, 1, 3])).toBe(4);
  });

  test('Retorna null para un conjunto vacío', () => {
    expect(findTheLostNumberSet([])).toBeNull();
  });

  test('Retorna null para un conjunto con un número par de elementos', () => {
    expect(findTheLostNumberSet([1, 2, 3, 4, 5, 3, 2, 1])).toBeNull();
  });

  test('Retorna null para un conjunto que contiene menos de 3 elementos', () => {
    expect(findTheLostNumberSet([1, 2])).toBe(null);
  });
  
  test('Retorna null para un conjunto con múltiples números únicos', () => {
    expect(findTheLostNumberSet([1, 3, 2, 4, 2, 1, 3, 5, 7])).toBeNull();
  });

  test('Retorna null para un conjunto con números no enteros', () => {
    expect(findTheLostNumberSet([1.5, 3, 2, 4, 2, 1, 3])).toBeNull();
  });
});


describe('findTheLostNumber using XOR(^)', () => {
  test('Encuentra el número único en un conjunto válido', () => {
    expect(findTheLostNumberXor([1, 3, 2, 4, 2, 1, 3])).toBeDefined();
    expect(findTheLostNumberXor([1, 3, 2, 4, 2, 1, 3])).toBe(4);
  });

  test('Retorna null para un conjunto vacío', () => {
    expect(findTheLostNumberXor([])).toBeNull();
  });

  test('Retorna null para un conjunto con un número par de elementos', () => {
    expect(findTheLostNumberXor([1, 2, 3, 4, 5, 3, 2, 1])).toBeNull();
  });

  test('Retorna null para un conjunto que contiene menos de 3 elementos', () => {
    expect(findTheLostNumberXor([1, 2])).toBe(null);
  });

  test('Retorna null para un conjunto con números no enteros', () => {
    expect(findTheLostNumberXor([1.5, 3, 2, 4, 2, 1, 3])).toBeNull();
  });
});