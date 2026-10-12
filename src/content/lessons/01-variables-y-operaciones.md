---
number: 1
title: "Variables y operaciones"
summary: "Declara variables, reconoce datos básicos y resuelve operaciones aritméticas en JavaScript."
duration: "60–75 minutos"
status: published
topics: [JavaScript, Variables, Tipos de datos, Operadores]
---

En esta clase vas a guardar valores en variables y usar operaciones aritméticas para resolver cálculos. Antes de ejecutar cada ejemplo, intenta predecir qué aparecerá en la consola.

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

**Salida esperada:**

```text
8
6
42
4
24
```

JavaScript respeta la precedencia matemática: primero resuelve multiplicaciones y divisiones, y después sumas y restas. Los paréntesis permiten indicar otro orden. Aquí se calculan primero `5 + 3` y `10 - 4`; luego se multiplican los resultados y finalmente se divide entre `2`. `/` puede producir un resultado decimal; no elimina automáticamente la parte decimal.
