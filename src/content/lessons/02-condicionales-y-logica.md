---
number: 2
title: "Condicionales y toma de decisiones"
summary: "Compara valores, combina condiciones y usa if, else if y else para decidir qué instrucciones ejecutar."
duration: "60–70 minutos"
status: published
topics: [JavaScript, Python, C++, Java, Condicionales, Comparaciones, Booleanos]
---

Al terminar esta clase podrás escribir una condición que produzca `true` o `false` y usarla para elegir qué hace el programa. Trabajaremos primero en JavaScript y compararemos una misma decisión en Python, C++ y Java. No usaremos ciclos todavía.

## Ruta de la clase

| Tiempo | Actividad |
|---|---|
| 5 min | Recordar variables y valores booleanos |
| 10 min | Comparar valores |
| 10 min | Combinar condiciones con operadores lógicos |
| 15 min | Entender `if`, `else if` y `else` |
| 15 min | Resolver y probar el ejemplo guiado |
| 10–15 min | Practicar con valores límite y explicar el resultado |

## 1. Una condición responde verdadero o falso

Una comparación toma valores y produce un booleano: `true` o `false`. Por ejemplo, `edad >= 18` es `true` si `edad` vale `18` o más. En Python, esos valores se escriben `True` y `False`; en JavaScript, Java y C++ se escriben `true` y `false`.

| Operador | Significado | Ejemplo |
|---|---|---|
| `>` | Mayor que | `8 > 5` → `true` |
| `<` | Menor que | `3 < 5` → `true` |
| `>=` | Mayor o igual que | `18 >= 18` → `true` |
| `<=` | Menor o igual que | `4 <= 5` → `true` |
| `===` | Igual en valor y tipo (JavaScript) | `5 === 5` → `true` |
| `!==` | Diferente en valor o tipo (JavaScript) | `5 !== "5"` → `true` |

En JavaScript usaremos `===` y `!==` para comparar igualdad sin conversiones automáticas de tipo. En Python, Java y C++ la igualdad se escribe `==` y la diferencia `!=`.

Prueba estas expresiones antes de leer su resultado:

```javascript
console.log(10 > 4);
console.log(10 <= 4);
console.log(5 === 5);
console.log(5 === "5");
```

**Salida esperada:**

```text
true
false
true
false
```

## 2. Combinar condiciones

Los operadores lógicos permiten expresar una regla con más de una condición:

| JavaScript, Java y C++ | Python | Significado | Ejemplo en JavaScript |
|---|---|---|---|
| `&&` | `and` | Las dos condiciones deben ser verdaderas | `true && false` → `false` |
| `||` | `or` | Al menos una condición debe ser verdadera | `true || false` → `true` |
| `!` | `not` | Invierte `true` por `false` y viceversa | `!true` → `false` |

Por ejemplo, para permitir el acceso solo si una persona es mayor de edad **y** tiene invitación, ambas condiciones deben cumplirse:

```javascript
const edad = 19;
const tieneInvitacion = true;
const puedeEntrar = edad >= 18 && tieneInvitacion;
console.log(puedeEntrar);
```

El resultado es `true`. Si cambias `tieneInvitacion` a `false`, el resultado pasa a `false`.

## 3. Elegir un camino con `if`, `else if` y `else`

`if` ejecuta un bloque cuando su condición es verdadera. `else if` permite comprobar otra condición si las anteriores fueron falsas. `else` cubre los casos restantes.

```javascript
const temperatura = 28;

if (temperatura >= 30) {
  console.log("Hace calor");
} else if (temperatura >= 20) {
  console.log("El clima es templado");
} else {
  console.log("Hace frío");
}
```

Como `temperatura` vale `28`, la salida es `El clima es templado`. Al encontrar la primera condición verdadera, el programa ejecuta ese bloque y omite los siguientes. Por eso el orden importa: si se revisara `temperatura >= 20` antes que `temperatura >= 30`, el caso de calor también quedaría clasificado como templado.

## 4. Ejemplo guiado: clasificar una nota

Vamos a clasificar una nota de `0` a `100`. Primero rechazamos los valores fuera del rango; luego revisamos las categorías de mayor a menor. Guarda el bloque como `condicionales.js`:

```javascript
const nota = 82;

if (nota < 0 || nota > 100) {
  console.log("Nota inválida");
} else if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Necesita refuerzo");
}
```

Ejecútalo en la terminal desde la carpeta donde guardaste el archivo:

```powershell
node condicionales.js
```

**Salida esperada:**

```text
Aprobado
```

Los casos límite ayudan a comprobar que los rangos no dejan huecos ni se cruzan:

| Valor de `nota` | Resultado |
|---:|---|
| `-1` | Nota inválida |
| `0` | Necesita refuerzo |
| `69` | Necesita refuerzo |
| `70` | Aprobado |
| `89` | Aprobado |
| `90` | Excelente |
| `100` | Excelente |
| `101` | Nota invalida |

## 5. La misma decisión en Python, C++ y Java

La regla y las categorías son idénticas. Observa cómo cambia la sintaxis de la condición y cómo se muestra el resultado.

### Python

Python usa `elif`, no `else if`, y no requiere paréntesis alrededor de la condición:

```python
nota = 82

if nota < 0 or nota > 100:
    print("Nota inválida")
elif nota >= 90:
    print("Excelente")
elif nota >= 70:
    print("Aprobado")
else:
    print("Necesita refuerzo")
```

Guarda el archivo como `condicionales.py` y ejecútalo en PowerShell con `python condicionales.py`. Si PowerShell no reconoce `python`, prueba `py condicionales.py`.

### C++

C++ usa `else if`, `||` y bloques entre llaves. Guarda el código como `condicionales.cpp`:

```cpp
#include <iostream>

int main() {
    int nota = 82;

    if (nota < 0 || nota > 100) {
        std::cout << "Nota inválida\n";
    } else if (nota >= 90) {
        std::cout << "Excelente\n";
    } else if (nota >= 70) {
        std::cout << "Aprobado\n";
    } else {
        std::cout << "Necesita refuerzo\n";
    }
}
```

Con MinGW/GCC, compílalo y ejecútalo desde PowerShell:

```powershell
g++ condicionales.cpp -o condicionales.exe
.\condicionales.exe
```

### Java

Java también usa `else if`, `||` y bloques entre llaves. Guarda el código como `Condicionales.java`, igual que el nombre de la clase pública:

```java
public class Condicionales {
    public static void main(String[] args) {
        int nota = 82;

        if (nota < 0 || nota > 100) {
            System.out.println("Nota inválida");
        } else if (nota >= 90) {
            System.out.println("Excelente");
        } else if (nota >= 70) {
            System.out.println("Aprobado");
        } else {
            System.out.println("Necesita refuerzo");
        }
    }
}
```

Compila y ejecuta desde PowerShell:

```powershell
javac Condicionales.java
java Condicionales
```

## 6. Práctica y cierre

Trabaja primero en `condicionales.js`. Antes de ejecutar, escribe qué resultado esperas para cada caso; después cambia `nota` y comprueba la salida.

1. Prueba todas las notas de la tabla anterior. Explica por qué `70` y `90` entran en una categoría distinta de `69` y `89`.
2. Cambia la regla para que la categoría **Excelente** empiece en `95`. Prueba `94`, `95` y `100`.
3. Crea una variable `tienePermiso`. Muestra `"Puede entrar"` solo cuando `edad >= 18` **y** `tienePermiso` sea verdadero; en cualquier otro caso, muestra `"No puede entrar"`.
4. Explica con tus palabras qué condición se revisa primero y qué ocurre si ninguna condición de `if` o `else if` es verdadera.

### Puedes explicarlo si...

- distingues una comparación de una instrucción condicional;
- predices si una expresión con `&&`, `||` o `!` da `true` o `false`;
- explicas por qué el orden de `else if` cambia la clasificación;
- pruebas límites como `69` y `70`, en lugar de verificar solo un valor del medio.

En la siguiente clase podemos practicar ciclos para repetir instrucciones sin copiarlas varias veces.
