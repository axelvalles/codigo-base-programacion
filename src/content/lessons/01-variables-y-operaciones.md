---
number: 1
title: "Variables y operaciones"
summary: "Declara variables y resuelve operaciones aritméticas en JavaScript; compara la sintaxis con Python, C++ y Java."
duration: "75–90 minutos"
status: published
topics: [JavaScript, Python, C++, Java, Variables, Tipos de datos, Operadores]
---

En esta clase vas a guardar valores en variables y usar operaciones aritméticas para resolver cálculos. Antes de ejecutar cada ejemplo, intenta predecir qué aparecerá en la consola. Guarda cada bloque en el archivo indicado y abre la terminal integrada en la carpeta donde lo guardaste.

## 1. Variables y valores

Una variable es un nombre que permite guardar y consultar un valor. `let` declara una variable que puede recibir otro valor más adelante; usa `const` cuando no necesites reasignarla. En JavaScript no se escribe el tipo al declarar la variable: el tipo corresponde al valor que contiene.

| Tipo | Qué representa | Ejemplo |
|---|---|---|
| `string` | Texto entre comillas | `"Pedro"` |
| `number` | Números enteros o decimales | `30`, `3.14` |
| `boolean` | Un valor verdadero o falso | `true`, `false` |

JavaScript usa el mismo tipo `number` para enteros y decimales. `console.log` muestra valores en la consola.

```javascript
let nombre = "Pedro";
let edad = 30;
let ciudad = "Madrid";
let esMayorDeEdad = true;
console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(esMayorDeEdad);
```

Guarda el bloque como `variables.js` y ejecútalo con Node.js:

```powershell
node variables.js
```

**Salida esperada:**

```text
Pedro
30
Madrid
true
```

Los nombres están en `camelCase`: la primera palabra empieza en minúscula y cada palabra siguiente comienza con mayúscula. Un buen nombre ayuda a entender qué representa el dato. Puedes consultar el tipo de un valor con `typeof`, por ejemplo: `typeof edad` devuelve `"number"`.

## 2. Operaciones aritméticas

JavaScript usa estos operadores para los cálculos básicos:

| Operador | Operación | Ejemplo |
|---|---|---|
| `+` | Suma | `5 + 3` |
| `-` | Resta | `10 - 4` |
| `*` | Multiplicación | `6 * 7` |
| `/` | División | `20 / 5` |
| `%` | Residuo de una división | `10 % 3` da `1` |
| `**` | Potencia | `2 ** 3` da `8` |

Con `+`, si uno de los valores es texto, JavaScript puede unirlos en vez de sumarlos: `"Hola, " + "Pedro"` produce `"Hola, Pedro"`. Para los cálculos, asegúrate de operar con valores numéricos.

```javascript
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let operacionCompuesta = ((5 + 3) * (10 - 4)) / 2;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(operacionCompuesta);
```

Guarda este bloque como `operaciones.js` y ejecútalo con Node.js:

```powershell
node operaciones.js
```

**Salida esperada:**

```text
8
6
42
4
24
```

JavaScript respeta la precedencia matemática: primero resuelve multiplicaciones y divisiones, y después sumas y restas. Los paréntesis permiten indicar otro orden. Aquí se calculan primero `5 + 3` y `10 - 4`; luego se multiplican los resultados y finalmente se divide entre `2`. `/` puede producir un resultado decimal; no elimina automáticamente la parte decimal.

## 3. Los mismos ejemplos en Python, C++ y Java

La información y los cálculos son los mismos. Cambian la forma de declarar algunas variables y la instrucción para mostrar resultados.

### Python

Python no necesita `let` ni una declaración de tipo. `print()` muestra los valores y el valor verdadero se escribe `True`.

```python
nombre = "Pedro"
edad = 30
ciudad = "Madrid"
es_mayor_de_edad = True

print(nombre)
print(edad)
print(ciudad)
print(es_mayor_de_edad)

suma = 5 + 3
resta = 10 - 4
multiplicacion = 6 * 7
division = 20 / 5
operacion_compuesta = ((5 + 3) * (10 - 4)) / 2

print(suma)
print(resta)
print(multiplicacion)
print(division)
print(operacion_compuesta)
```

Guarda el bloque como `variables.py` y ejecútalo desde PowerShell:

```powershell
python variables.py
```

Si PowerShell no reconoce `python`, prueba `py variables.py`.

### C++

En C++ se escribe el tipo de cada variable (`std::string`, `int` o `bool`). El ejemplo se ejecuta dentro de `main()` y usa `std::cout` para mostrar resultados.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string nombre = "Pedro";
    int edad = 30;
    std::string ciudad = "Madrid";
    bool esMayorDeEdad = true;

    std::cout << std::boolalpha;
    std::cout << nombre << '\n';
    std::cout << edad << '\n';
    std::cout << ciudad << '\n';
    std::cout << esMayorDeEdad << '\n';

    int suma = 5 + 3;
    int resta = 10 - 4;
    int multiplicacion = 6 * 7;
    int division = 20 / 5;
    int operacionCompuesta = ((5 + 3) * (10 - 4)) / 2;

    std::cout << suma << '\n';
    std::cout << resta << '\n';
    std::cout << multiplicacion << '\n';
    std::cout << division << '\n';
    std::cout << operacionCompuesta << '\n';
}
```

Guarda el bloque como `variables.cpp`. Con MinGW/GCC, compílalo y ejecútalo desde PowerShell:

```powershell
g++ variables.cpp -o variables.exe
.\variables.exe
```

Si instalaste MSVC, usa **Developer PowerShell for Visual Studio**:

```powershell
cl /EHsc variables.cpp
.\variables.exe
```

`std::boolalpha` hace que `std::cout` escriba `true` o `false` en lugar de `1` o `0` para un valor lógico.

### Java

En Java también se declara el tipo (`String`, `int` o `boolean`). El código empieza dentro de una clase y `System.out.println()` muestra cada valor.

```java
public class Ejemplo {
    public static void main(String[] args) {
        String nombre = "Pedro";
        int edad = 30;
        String ciudad = "Madrid";
        boolean esMayorDeEdad = true;

        System.out.println(nombre);
        System.out.println(edad);
        System.out.println(ciudad);
        System.out.println(esMayorDeEdad);

        int suma = 5 + 3;
        int resta = 10 - 4;
        int multiplicacion = 6 * 7;
        int division = 20 / 5;
        int operacionCompuesta = ((5 + 3) * (10 - 4)) / 2;

        System.out.println(suma);
        System.out.println(resta);
        System.out.println(multiplicacion);
        System.out.println(division);
        System.out.println(operacionCompuesta);
    }
}
```

Guarda el archivo como `Ejemplo.java`, igual que el nombre de la clase pública. Luego compílalo y ejecútalo desde PowerShell:

```powershell
javac Ejemplo.java
java Ejemplo
```

**Diferencia importante en la división:** Python calcula `20 / 5` y muestra `4.0`. En JavaScript muestra `4`. En C++ y Java, cuando ambos operandos son enteros, la división también es entera; aquí da `4` porque la división es exacta. Para conservar decimales en esos dos lenguajes, usa valores decimales, por ejemplo `20.0 / 6.0`.
