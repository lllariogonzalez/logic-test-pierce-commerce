# Ejercicio de Lógica de Programación: Encuentra el Número Perdido

**Descripción:**
Dado un conjunto de números enteros del 1 al N, donde N es un número impar mayor o igual
a 3, todos los números están presentes dos veces, excepto uno. Tu tarea es encontrar ese
número único.

**Ejemplo:**
Si tenemos el conjunto {1, 3, 2, 4, 2, 1, 3}, el número único es 4, ya que aparece solo una vez.

## **Instrucciones:**

Escribe un algoritmo en pseudo lenguaje o javascript, para encontrar el número único
en un conjunto dado.
Utiliza estructuras de control de flujo, como bucles y condiciones, para implementar
tu algoritmo.
Asegúrate de manejar casos donde el conjunto de números sea válido (cumple con
las condiciones descritas) y proporcione un resultado correcto.

**Preguntas para Resolver:**

- ¿Cómo abordaste el problema?
- ¿Qué estrategia utilizaste para identificar el número único?
- ¿Cómo manejas los casos donde el conjunto no cumple con las condiciones?

## Solución

La solución fué realizada en JavaScript, para descargar se necesita tener instalado Node.js y Git.

Para descargar la solución y ejecutar los test prodeceder por terminal de la siguente manera:

```bash
git clone "link-del-repositorio"
# cambiar y entrar en el repositorio
cd "nombre-del-repositorio"
# instalar dependencias necesarias para los test
npm install
# ejecutar los test
npm test
```

Respondiendo a las preguntas, abordé el problema de la siguiente manera: 

1. Dada las condiciones especificadas lo primero que hice fue validar que el conjunto recibido por argumento sea válido, comprobando que contenga un número impar de elementos y que estos sean mayor o igual a 3. De lo contrario realizo a un early return null.

2. Validado el conjunto procedo a recorrerlo y validar cada elemento comprobando que sea un número entero, de lo contrario se un early return null. Validado cada elemento es añadido a un conjunto set denomido `unique` para almacenar elementos únicos y tener un acceso rápido y fácil.

3. La lógica aplicada en este bucle y recorrido del conjunto proporcionado es añadir los elementos al conjunto `unique` en caso de que no exista, y en caso de exitir eliminarlo. Por lo cual esto me daría como resultado un conjunto de elementos únicos, es decir que no se repitieron a lo largo del recorrido.

4. Por último y la razón por la cual no aplique otro algoritmo utilizando el operador XOR (^). Es validar el caso de que el conjunto recibido tenga mas de un elemento único, por ejemplo: {1,2,3,4,5,2,1}, por lo cual antes de retornar el número perdido, valido el tamaño del set `unique` asegurandome de que solo exista uno valor para retornarlo o por el contrario retornar `null`.

    - El algoritmo que hace uso del operador XOR(^) también se añade al repositorio, ambos tienen una complejidad de O(n) dado que recorren una sola ves el conjunto para determinar el número único. Aunque este no fue mi primera idea, creo que aplica una buena lógica para el caso propuesto mas aun si sabemos que el conjunto siempre va a ser válido.

    - Explicación: El operador XOR (^) es un operador bit a bit que compara los bits de dos números, devuelve 1 en cada posición donde los bits difieren, y 0 donde son iguales.

        |  x   |	y  | x XOR(^) y |
        |:---: |:---:|:----------:|
        |  0	 |  0	 |     0      | 
        |  0	 |  1	 |     1      |   
        |  1	 |  0	 |     1      |   
        |  1	 |  1	 |     0      |   

      - **Propiedad conmutativa:** El XOR es conmutativo, lo que significa que el orden de los operandos no importa. Es decir, a ^ b es lo mismo que b ^ a.

      - **Propiedad de cancelación:** Cuando haces XOR dos veces con el mismo número, el resultado será el número original. Es decir, a ^ b ^ b es igual a a.
    
    - Si tenemos un conjunto donde todos los números aparecen dos veces excepto uno, al hacer XOR con cada número, se eliminarán los pares de números idénticos
    y al final quedará el número único. Al hacer XOR con el mismo número dos veces, el resultado será 0. Por lo tanto, el XOR de todos los números pares se cancelará y solo quedará el número único al final del conjunto.

    Este algoritmo tiene una complejidad de tiempo de O(n) y es el mas eficiente dadas las condiciones y descripción provista.

      - **Contras:** Si el conjunto no cumple con esta condición (por ejemplo, si el número único no está presente o si hay múltiples números únicos), el algoritmo no podrá encontrar el número único de manera precisa.
      