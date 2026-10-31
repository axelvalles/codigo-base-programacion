---
number: 5
title: "Arreglos y listas"
summary: "Guarda varios valores, recórrelos con ciclos y utiliza funciones para calcular resultados sobre una colección."
status: published
topics: [JavaScript, Python, C++, Java, Arreglos, Listas, Ciclos, Funciones]
---

Un arreglo permite guardar varios valores relacionados bajo un mismo nombre. En esta clase usarás colecciones para acceder a datos, modificarlos y resolver problemas combinando ciclos y funciones.

## 1. Una variable para varios valores

En lugar de declarar una variable por cada nota, podemos reunirlas en un arreglo:

```javascript
let notas = [4, 3, 5, 2];
console.log(notas);
```

Los corchetes delimitan el arreglo y las comas separan sus elementos. En JavaScript, esta colección se llama `Array`; en Python trabajaremos con listas. Usaremos colecciones de valores del mismo tipo para que los ejemplos sean fáciles de seguir.

Guarda los ejemplos de JavaScript en `arreglos.js` y ejecútalos desde la carpeta del archivo:

```powershell
node arreglos.js
```

Cada bloque de ejemplo es independiente: puedes probarlo por separado para no repetir declaraciones de variables en el mismo archivo.

## 2. Índices, longitud y cambios

El **índice** indica la posición de un elemento. La primera posición es `0`, no `1`:

| Índice | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Valor | 4 | 3 | 5 | 2 |

```javascript
let notas = [4, 3, 5, 2];
console.log(notas[0]);
console.log(notas[2]);
console.log(notas.length);

notas[1] = 4;
console.log(notas[1]);
console.log(notas[notas.length - 1]);
```

**Salida esperada:**

```text
4
5
4
4
2
```

`length` es la cantidad de elementos. El último índice válido es `length - 1`. Cambiar `notas[1]` modifica el segundo elemento, pero no agrega una posición.

Si `notas.length` vale `4`, `notas[4]` está fuera del arreglo y su lectura devuelve `undefined` en JavaScript. No confundas la cantidad de elementos con el último índice. Un arreglo vacío se escribe `[]` y tiene longitud `0`.

## 3. Agregar y quitar al final

```javascript
let frutas = ["manzana", "pera"];
frutas.push("uva");
console.log(frutas.length);
console.log(frutas[2]);

let retirada = frutas.pop();
console.log(retirada);
console.log(frutas.length);
```

**Salida esperada:**

```text
3
uva
uva
2
```

`push` agrega al final y modifica el arreglo. `pop` retira el último elemento y lo devuelve, por eso podemos guardarlo en `retirada`. Si se llama a `pop` sobre un arreglo vacío en JavaScript, devuelve `undefined`.

## 4. Recorrer todos los elementos

```javascript
let nombres = ["Ana", "Luis", "Eva"];

for (let indice = 0; indice < nombres.length; indice++) {
  console.log(nombres[indice]);
}
```

**Salida esperada:**

```text
Ana
Luis
Eva
```

El ciclo empieza en `0` y continúa mientras el índice sea **menor** que la longitud. Usar `<=` intentaría acceder a una posición adicional. En cada vuelta, `nombres[indice]` consulta un elemento diferente. Con un arreglo vacío, este ciclo no ejecuta ninguna vuelta.

También podemos combinar el recorrido con una condición:

```javascript
let numeros = [2, 7, 4, 9];

for (let indice = 0; indice < numeros.length; indice++) {
  if (numeros[indice] > 5) {
    console.log(numeros[indice]);
  }
}
```

**Salida esperada:** `7` y `9`, en líneas separadas.

## 5. Funciones que reciben arreglos

Un parámetro puede recibir un arreglo completo. Esta función acumula sus valores y devuelve la suma:

```javascript
function sumarValores(valores) {
  let suma = 0;

  for (let indice = 0; indice < valores.length; indice++) {
    suma = suma + valores[indice];
  }

  return suma;
}

console.log(sumarValores([2, 4, 6]));
console.log(sumarValores([]));
```

**Salida esperada:**

```text
12
0
```

`valores` es el parámetro; `[2, 4, 6]` es el argumento. La suma comienza en `0`, y cada vuelta incorpora un elemento. Con `[]`, no hay vueltas y la suma sigue siendo `0`.

Una función también puede modificar el arreglo recibido. Por ejemplo, si ejecuta `valores.push(10)`, ese cambio será visible en el arreglo original. Las funciones de los siguientes ejemplos solo leen sus elementos.

## 6. Ejemplo: analizar las notas

Trabajaremos con notas de `0` a `5`. Una nota de **3 o más** cuenta como aprobada. Para este ejemplo suponemos que todos los elementos son números dentro de esa escala.

```javascript
function calcularPromedio(notas) {
  if (notas.length === 0) {
    return null;
  }

  let suma = 0;
  for (let indice = 0; indice < notas.length; indice++) {
    suma = suma + notas[indice];
  }
  return suma / notas.length;
}

function encontrarNotaMayor(notas) {
  if (notas.length === 0) {
    return null;
  }

  let mayor = notas[0];
  for (let indice = 1; indice < notas.length; indice++) {
    if (notas[indice] > mayor) {
      mayor = notas[indice];
    }
  }
  return mayor;
}

function contarAprobadas(notas) {
  let cantidad = 0;
  for (let indice = 0; indice < notas.length; indice++) {
    if (notas[indice] >= 3) {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}

let notas = [4, 3, 5, 2];
console.log(calcularPromedio(notas));
console.log(encontrarNotaMayor(notas));
console.log(contarAprobadas(notas));
console.log(calcularPromedio([]));
```

**Salida esperada:**

```text
3.5
5
3
null
```

- El promedio suma `14` y divide entre `4` elementos.
- La búsqueda del mayor empieza en el primer valor y compara los restantes. No empieza en `0`: hacerlo impediría reutilizar el algoritmo correctamente con colecciones de números negativos.
- El contador aumenta solo cuando la nota es mayor o igual a `3`.
- `null` representa aquí la ausencia de un resultado: no hay promedio ni nota mayor para una lista vacía. Comprobamos ese caso **antes** de dividir o consultar el primer elemento. En cambio, una lista vacía tiene `0` notas aprobadas.

## 7. El mismo recorrido en otros lenguajes

Estos ejemplos crean una colección, modifican su segundo elemento, agregan y retiran un valor al final y suman los elementos mediante un ciclo. Todos muestran `4` como cantidad y `15` como suma.

### Python

Guarda el archivo como `arreglos.py`:

```python
notas = [4, 3, 5, 2]
notas[1] = 4
notas.append(1)
notas.pop()

suma = 0
for indice in range(len(notas)):
    suma = suma + notas[indice]

print(len(notas))
print(suma)
```

`len(notas)` obtiene la longitud; `append` agrega al final. Ejecuta `python arreglos.py` o `py arreglos.py`.

### C++

Usaremos `std::vector`, una colección cuyo tamaño puede cambiar. Un arreglo de tamaño fijo no permite agregar elementos de la misma manera. Guarda el archivo como `arreglos.cpp`:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> notas = {4, 3, 5, 2};
    notas[1] = 4;
    notas.push_back(1);
    notas.pop_back();

    int suma = 0;
    for (std::size_t indice = 0; indice < notas.size(); indice++) {
        suma = suma + notas[indice];
    }

    std::cout << notas.size() << '\n';
    std::cout << suma << '\n';
}
```

`size()` obtiene la cantidad. `pop_back()` requiere que el vector no esté vacío y no devuelve el valor retirado; si lo necesitas, consulta `back()` antes de retirarlo, comprobando primero `empty()`.

```powershell
g++ -std=c++17 arreglos.cpp -o arreglos.exe
.\arreglos.exe
```

### Java

Usaremos `ArrayList`, que permite agregar y retirar elementos. `Integer` indica que esta lista guarda números enteros. Guarda el archivo como `Arreglos.java`:

```java
import java.util.ArrayList;
import java.util.Arrays;

public class Arreglos {
    public static void main(String[] args) {
        ArrayList<Integer> notas = new ArrayList<>(Arrays.asList(4, 3, 5, 2));
        notas.set(1, 4);
        notas.add(1);
        notas.remove(notas.size() - 1);

        int suma = 0;
        for (int indice = 0; indice < notas.size(); indice++) {
            suma = suma + notas.get(indice);
        }

        System.out.println(notas.size());
        System.out.println(suma);
    }
}
```

`get` consulta un elemento y `set` lo modifica. En este ejemplo, `remove` recibe el índice que se quiere retirar. Antes de retirar el último elemento de una lista que pudiera estar vacía, comprueba `!notas.isEmpty()`.

```powershell
javac Arreglos.java
java Arreglos
```

En Python, Java y C++, no debes suponer que consultar una posición inexistente devuelve `undefined` como en JavaScript: los comportamientos son diferentes. En todos los lenguajes, comprueba los límites y evita acceder a posiciones fuera de la colección.

## 8. Práctica

Resuelve en JavaScript. Antes de ejecutar, identifica los índices que se visitan y predice el resultado. Prueba cada ejercicio por separado; cuando uses una función, devuelve el resultado con `return` y muéstralo desde la llamada.

1. **Primer y último elemento.** Crea `colores = ["rojo", "verde", "azul"]` y muestra ambos usando sus índices. **Resultado esperado:** `"rojo"` y `"azul"`.
2. **Modificar una posición.** Con `precios = [10, 20, 30]`, cambia el segundo precio a `25`. **Resultado esperado:** los valores son `10`, `25` y `30`; la longitud sigue siendo `3`.
3. **Agregar y retirar.** Con `tareas = ["leer", "practicar"]`, agrega `"repasar"` al final y luego retíralo guardando el valor devuelto. **Resultado esperado:** el valor retirado es `"repasar"` y quedan `2` tareas.
4. **Recorrer con índices.** Muestra los elementos de `[3, 6, 9, 12]`, uno por línea. **Resultado esperado:** cuatro líneas, sin una quinta línea con `undefined`.
5. **Sumar precios.** Define `sumarPrecios(precios)`. **Pruebas:** `[10, 25, 5]` devuelve `40`; `[]` devuelve `0`.
6. **Contar pares.** Define `contarPares(numeros)`. Pista: un número es par si su resto al dividir entre `2` es `0`. **Pruebas:** `[2, 5, 8, 11]` devuelve `2`; `[]` devuelve `0`.
7. **Encontrar el menor.** Define `encontrarMenor(numeros)`, comenzando por el primer elemento. **Pruebas:** `[7, 2, 9]` devuelve `2`; `[-4, -8, -2]` devuelve `-8`; `[]` devuelve `null`.
8. **Crear una colección nueva.** Define `duplicarValores(numeros)`, que use un ciclo y `push` para devolver un arreglo con cada valor multiplicado por `2`, sin modificar el original. **Pruebas:** `[1, 3, 5]` devuelve `[2, 6, 10]`; `[]` devuelve `[]`.
9. **Buscar un valor.** Define `contieneValor(valores, buscado)`, usando un ciclo y comparaciones. **Pruebas:** `([4, 7, 9], 7)` devuelve `true`; `([4, 7, 9], 2)` y `([], 2)` devuelven `false`.
10. **Analizar otro grupo de notas.** Usa las tres funciones del ejemplo con `[1, 3, 4, 2, 5]`. **Resultados esperados:** promedio `3`, mayor `5` y `3` notas aprobadas. Comprueba también `[]`: promedio `null`, mayor `null` y `0` aprobadas.

El siguiente paso puede ser representar datos relacionados con objetos, como el nombre y las notas de un estudiante.
