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

`let` declara una variable: un nombre asociado a un valor que el programa puede consultar y, si hace falta, cambiar. En este ejemplo hay textos (`string`), números (`number`) y un valor lógico (`boolean`). `console.log` muestra cada valor en la consola.

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

Los nombres están en `camelCase`: la primera palabra empieza en minúscula y cada palabra siguiente comienza con mayúscula. Un buen nombre ayuda a entender qué representa el dato.

## 2. Operaciones aritméticas

JavaScript usa estos operadores para los cálculos básicos:

| Operador | Operación | Ejemplo |
|---|---|---|
| `+` | Suma | `5 + 3` |
| `-` | Resta | `10 - 4` |
| `*` | Multiplicación | `6 * 7` |
| `/` | División | `20 / 5` |

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

Los paréntesis hacen explícito el orden: primero `5 + 3` y `10 - 4`; después se multiplican los resultados y finalmente se divide entre `2`. En JavaScript, `/` produce una división numérica; no elimina automáticamente los decimales.
