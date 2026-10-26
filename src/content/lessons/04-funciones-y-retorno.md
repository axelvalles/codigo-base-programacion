---
number: 4
title: "Funciones y valores de retorno"
summary: "Organiza un problema en funciones pequeñas, usa parámetros para recibir datos y return para entregar resultados."
duration: "65–70 minutos"
status: published
topics: [JavaScript, Python, C++, Java, Funciones, Parámetros, Retorno]
---

Al terminar esta clase podrás definir y llamar funciones, distinguir parámetros de argumentos y devolver un resultado con `return`. Empezaremos con JavaScript y compararemos una función sencilla en Python, C++ y Java.

## Ruta de la clase

| Tiempo | Actividad |
|---|---|
| 5 min | Recordar variables, condicionales y ciclos |
| 10 min | Entender qué problema resuelve una función |
| 15 min | Definir funciones y enviarles argumentos |
| 15 min | Devolver un resultado y distinguirlo de imprimirlo |
| 10 min | Dividir un problema en pasos pequeños |
| 10–15 min | Comparar lenguajes y practicar |

## 1. ¿Para qué sirve una función?

Una **función** agrupa instrucciones con un nombre para poder ejecutarlas cuando las necesitemos. Ayuda a evitar repetir código y permite dividir un problema en tareas pequeñas que podemos probar por separado.

Por ejemplo, un programa que calcula el precio final podría separar el cálculo del descuento y la presentación del resultado. Cada función tiene una responsabilidad concreta.

## 2. Definir y llamar una función

Guarda este código como `funciones.js`:

```javascript
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

let area = calcularAreaRectangulo(5, 3);
console.log(area);
```

Ejecútalo con Node.js:

```powershell
node funciones.js
```

**Salida esperada:**

```text
15
```

La definición comienza con `function`, luego indica el nombre, los parámetros entre paréntesis y las instrucciones entre llaves. Escribir la definición no ejecuta el cálculo: la llamada `calcularAreaRectangulo(5, 3)` es la que ejecuta la función.

En esta llamada, `base` y `altura` son **parámetros**: nombres que la función recibe. Los valores `5` y `3` son **argumentos**: los datos concretos que enviamos al llamarla.

| Concepto | En el ejemplo | Para qué sirve |
|---|---|---|
| Parámetro | `base`, `altura` | Recibe un dato dentro de la función |
| Argumento | `5`, `3` | Proporciona un valor al hacer la llamada |
| Llamada | `calcularAreaRectangulo(5, 3)` | Ejecuta las instrucciones de la función |

El orden importa: el primer argumento se asigna a `base` y el segundo a `altura`.

## 3. `return` no es lo mismo que imprimir

`return` entrega un valor al lugar donde se llamó la función. `console.log` muestra un valor en la consola. Son acciones distintas:

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(4, 6);
console.log(resultado);
```

`sumar(4, 6)` produce el valor `10`; la asignación lo guarda en `resultado` y `console.log` lo muestra. Así podemos usar el resultado en otro cálculo:

```javascript
let totalConImpuesto = sumar(4, 6) * 1.19;
console.log(totalConImpuesto);
```

En cambio, si la función solo ejecuta `console.log(a + b)`, muestra el total pero no lo devuelve para reutilizarlo. Cuando necesitas que otras instrucciones trabajen con el resultado, usa `return`.

Al llegar a `return`, la función termina y devuelve ese valor. Las instrucciones que aparezcan después de ese `return` no se ejecutan.

## 4. Dividir un problema en funciones pequeñas

Vamos a calcular el precio de un producto después de aplicar un descuento porcentual:

```javascript
function calcularDescuento(precio, porcentaje) {
  return precio * porcentaje / 100;
}

function calcularPrecioFinal(precio, porcentaje) {
  let descuento = calcularDescuento(precio, porcentaje);
  return precio - descuento;
}

let precioFinal = calcularPrecioFinal(50000, 10);
console.log(precioFinal);
```

**Salida esperada:**

```text
45000
```

`calcularDescuento` resuelve una parte: cuánto dinero se descuenta. `calcularPrecioFinal` usa ese resultado para calcular el precio final. Si cada función tiene una tarea clara, es más fácil revisar dónde está un error y probar cada cálculo.

### Comprueba el cálculo

1. `calcularDescuento(50000, 10)` devuelve `5000`.
2. `calcularPrecioFinal(50000, 10)` resta `5000` de `50000`.
3. El resultado `45000` se guarda en `precioFinal` y luego se muestra.

## 5. La misma función en otros lenguajes

En los tres ejemplos, la función recibe dos números y devuelve el área del rectángulo. El concepto es el mismo, aunque cambia la sintaxis.

### Python

Guarda el código como `funciones.py`. Python usa `def` para definir funciones y la indentación delimita el bloque:

```python
def calcular_area_rectangulo(base, altura):
    return base * altura

area = calcular_area_rectangulo(5, 3)
print(area)
```

Ejecútalo con `python funciones.py` o, si ese comando no está disponible, `py funciones.py`.

### C++

Guarda el código como `funciones.cpp`. En C++ se escribe primero el tipo del valor devuelto (`int`) y también los tipos de los parámetros:

```cpp
#include <iostream>

int calcularAreaRectangulo(int base, int altura) {
    return base * altura;
}

int main() {
    int area = calcularAreaRectangulo(5, 3);
    std::cout << area << '\n';
}
```

Compila y ejecuta con MinGW/GCC:

```powershell
g++ funciones.cpp -o funciones.exe
.\funciones.exe
```

### Java

Guarda el código como `Funciones.java`; el nombre del archivo debe coincidir con el de la clase pública. En Java, esta función se declara como un método dentro de una clase:

```java
public class Funciones {
    static int calcularAreaRectangulo(int base, int altura) {
        return base * altura;
    }

    public static void main(String[] args) {
        int area = calcularAreaRectangulo(5, 3);
        System.out.println(area);
    }
}
```

Compila y ejecuta con `javac Funciones.java` y después `java Funciones`.

## 6. Práctica en clase

Resuelve primero en JavaScript. Antes de ejecutar, predice el resultado y explica qué valor recibe cada parámetro.

1. Define `doblar(numero)`, que devuelva el doble de un número. Guarda el resultado de llamar `doblar(8)` y muéstralo.
2. Define `calcularPromedio(nota1, nota2, nota3)`, que devuelva el promedio de tres notas. Llámala con `4`, `3.5` y `5`.
3. Define `convertirMinutosAHoras(minutos)`, que devuelva las horas correspondientes como número decimal. Prueba con `90`.
4. En el cálculo del descuento, cambia el porcentaje a `25`. ¿Qué valor devuelve `calcularDescuento(50000, 25)` y cuál es el precio final?

### Puedes explicarlo si...

- distingues una definición de una llamada a función;
- identificas los parámetros y los argumentos en una llamada;
- explicas cuándo conviene devolver un valor con `return` en vez de solo imprimirlo;
- divides un problema en funciones pequeñas con responsabilidades claras.

El siguiente paso recomendado es estudiar estructuras de datos como listas y arreglos, para guardar colecciones de valores y recorrerlas con ciclos.
