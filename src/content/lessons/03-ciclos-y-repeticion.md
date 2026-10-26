---
number: 3
title: "Ciclos y repetición"
summary: "Repite instrucciones con for y while, controla contadores y acumula resultados sin crear ciclos infinitos."
duration: "65–70 minutos"
status: published
topics: [JavaScript, Python, C++, Java, Ciclos, Repetición]
---

Al terminar esta clase podrás elegir entre `for` y `while`, seguir el valor de un contador y usar un acumulador. Empezaremos con JavaScript y compararemos un mismo ciclo en Python, C++ y Java.

## Ruta de la clase

| Tiempo | Actividad |
|---|---|
| 5 min | Recordar condiciones y preparar el problema |
| 10 min | Distinguir `for` de `while` |
| 15 min | Repetir una acción con `for` |
| 15 min | Sumar valores con un acumulador |
| 10 min | Ejecutar un ciclo con `while` y revisar sus límites |
| 10–15 min | Comparar lenguajes y practicar |

## 1. ¿Para qué sirve un ciclo?

Un ciclo repite un bloque de instrucciones. En vez de escribir cinco veces `console.log("Hola")`, podemos describir la repetición una vez y controlar cuándo termina.

- Usa `for` cuando sabes de antemano cuántas repeticiones necesitas o puedes describirlas con un contador.
- Usa `while` cuando quieres repetir mientras una condición siga siendo verdadera.

En ambos casos debe existir una forma de llegar al final. Si la condición nunca se vuelve falsa, el ciclo continúa indefinidamente.

## 2. `for`: contar repeticiones

Este ciclo muestra los números del 1 al 5. Guarda el código como `ciclos.js`:

```javascript
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}
```

Ejecútalo con Node.js:

```powershell
node ciclos.js
```

Un `for` tiene tres partes, separadas por punto y coma:

| Parte | Código | Qué hace |
|---|---|---|
| Inicio | `let contador = 1` | Prepara el contador antes de comenzar |
| Condición | `contador <= 5` | Decide si se ejecuta otra vuelta |
| Actualización | `contador++` | Aumenta el contador al terminar cada vuelta |

El flujo es: inicio, comprobar condición, ejecutar el bloque, actualizar y volver a comprobar. Cuando `contador` llega a `6`, `contador <= 5` es falso y el ciclo termina.

### Comprueba los límites

El `1` se incluye porque el contador comienza en `1`. El `5` se incluye porque usamos `<= 5`. Si cambiamos la condición por `contador < 5`, el ciclo mostrará solo del 1 al 4. Probar el primer y el último valor ayuda a encontrar errores de límite.

## 3. Acumular un resultado

Un **acumulador** conserva un resultado y lo actualiza en cada vuelta. Vamos a sumar los números del 1 al 5:

```javascript
let suma = 0;

for (let numero = 1; numero <= 5; numero++) {
  suma = suma + numero;
}

console.log(suma);
```

**Salida esperada:**

```text
15
```

`suma` comienza en `0`. En cada vuelta se le agrega el número actual:

| Vuelta | `numero` | `suma` después de actualizar |
|---:|---:|---:|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |
| 5 | 5 | 15 |

La asignación `suma = suma + numero` calcula el valor anterior más el número actual y guarda el nuevo resultado. También se puede escribir `suma += numero`.

## 4. `while`: repetir mientras se cumpla una condición

Este ejemplo también muestra del 1 al 5, pero el contador se prepara antes del ciclo y se actualiza dentro del bloque:

```javascript
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

Antes de cada vuelta, `while` comprueba `contador <= 5`. Cuando el contador vale `6`, la condición es falsa y el ciclo termina. Si olvidas `contador++`, el valor se queda en `1`, la condición sigue siendo verdadera y el programa no termina.

### Evita un ciclo infinito

Antes de ejecutar un `while`, comprueba lo siguiente:

1. **Inicio:** ¿la variable comienza con un valor que permite el comportamiento esperado?
2. **Condición:** ¿la condición limita claramente las repeticiones?
3. **Actualización:** ¿algo dentro del ciclo cambia para acercarse al final?

Haz una traza corta en papel: anota el valor inicial, la condición y el valor después de una vuelta. No uses `while (true)` en esta práctica.

## 5. El mismo conteo en otros lenguajes

Los cuatro ejemplos cuentan del 1 al 5. Observa que el propósito no cambia, pero sí la sintaxis. En JavaScript y Java las variables locales del ciclo se declaran con `let` e `int`, respectivamente; C++ también usa `int`; Python no declara un tipo ni usa llaves.

### Python

Guarda el código como `ciclos.py`. `range(1, 6)` incluye el 1 y se detiene antes del 6:

```python
for numero in range(1, 6):
    print(numero)
```

Ejecútalo con `python ciclos.py` o, si ese comando no está disponible, `py ciclos.py`.

### C++

Guarda el código como `ciclos.cpp`:

```cpp
#include <iostream>

int main() {
    for (int numero = 1; numero <= 5; numero++) {
        std::cout << numero << '\n';
    }
}
```

Compila y ejecuta con MinGW/GCC:

```powershell
g++ ciclos.cpp -o ciclos.exe
.\ciclos.exe
```

### Java

Guarda el código como `Ciclos.java`; el nombre del archivo debe coincidir con el de la clase pública:

```java
public class Ciclos {
    public static void main(String[] args) {
        for (int numero = 1; numero <= 5; numero++) {
            System.out.println(numero);
        }
    }
}
```

Compila y ejecuta con `javac Ciclos.java` y después `java Ciclos`.

## 6. Práctica en clase

Resuelve primero en JavaScript. Antes de ejecutar, predice la salida y explica qué hace que el ciclo termine.

1. Muestra los números del `1` al `10` con `for`.
2. Usa un acumulador para sumar del `1` al `10`. Comprueba que el resultado sea `55`.
3. Usa `while` para mostrar una cuenta regresiva del `5` al `1`. El contador debe disminuir en cada vuelta.
4. Cambia el límite del primer ejercicio a `5` y compara `numero <= 5` con `numero < 5`. ¿Qué número deja de aparecer?

### Puedes explicarlo si...

- eliges `for` cuando el conteo está definido y `while` cuando la repetición depende de una condición;
- identificas el inicio, la condición y la actualización de un ciclo;
- explicas cómo un acumulador conserva un total parcial;
- revisas los valores de inicio y fin y compruebas que un `while` pueda terminar.

El siguiente paso recomendado es aprender funciones para organizar instrucciones repetibles. Más adelante combinaremos ciclos con listas y arreglos para procesar varios datos.
