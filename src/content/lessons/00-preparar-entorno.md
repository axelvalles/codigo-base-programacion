---
number: 0
title: "Instalación de herramientas y entorno de trabajo"
summary: "Instala y comprueba el editor, Git y los entornos de Python, JavaScript, Java, C++ y SQL."
duration: "90–120 minutos"
status: published
topics: [Todas, Setup, Terminal]
setupTools:
  - id: editor
    label: "Editor + Git"
    title: "Editor y control de versiones"
    instructions:
      - "Instala Visual Studio Code."
      - "Instala Git."
      - "Crea una carpeta programacion y ábrela desde el editor."
      - "Abre la terminal integrada. Aprende pwd/cd, ls/dir y mkdir."
    resources:
      - label: "Descargar Visual Studio Code"
        url: "https://code.visualstudio.com/download"
      - label: "Descargar Git"
        url: "https://git-scm.com/downloads"
    command: "git --version"
    outcome: "Se muestra la versión de Git. Después, configura tu nombre y correo para registrar cambios."
  - id: python
    label: "Python"
    title: "Python: lenguaje principal"
    instructions:
      - "Descarga Python desde el sitio oficial."
      - "En Windows, permite que el instalador agregue Python al PATH."
      - "Crea hola.py con print(\"Hola, mundo\")."
    resources:
      - label: "Descargar Python"
        url: "https://www.python.org/downloads/"
    command: "python --version && python hola.py"
    outcome: "Si python no existe, prueba py en Windows o python3 en macOS/Linux. No avances sin entender qué ejecutable encontró la terminal."
  - id: javascript
    label: "JavaScript"
    title: "JavaScript: navegador y Node.js"
    instructions:
      - "Prueba JavaScript primero en la consola del navegador."
      - "Instala una versión LTS de Node.js para ejecutar archivos desde la terminal."
      - "Crea hola.js con console.log(\"Hola, mundo\")."
    resources:
      - label: "Descargar Node.js"
        url: "https://nodejs.org/en/download"
    command: "node --version && npm --version && node hola.js"
    outcome: "Node ejecuta JavaScript fuera del navegador; npm administra paquetes. Son herramientas relacionadas, pero NO son lo mismo."
  - id: java
    label: "Java"
    title: "Java: JDK y compilación"
    instructions:
      - "Instala un JDK LTS de Eclipse Temurin."
      - "Crea Main.java con una clase Main y un método main."
      - "Compila y luego ejecuta. Observa que son dos pasos diferentes."
    resources:
      - label: "Descargar Eclipse Temurin"
        url: "https://adoptium.net/temurin/releases/"
    command: "javac --version && java --version"
    outcome: "El JDK incluye el compilador javac. Una instalación que solo permite ejecutar Java no basta para desarrollar."
  - id: cpp
    label: "C++"
    title: "C++: compilador, no solo extensión"
    instructions:
      - "Instala la extensión C/C++ de VS Code."
      - "Instala un compilador: MSVC o MinGW en Windows, Clang en macOS, GCC en Linux."
      - "Sigue la guía oficial de C++ en VS Code."
    resources:
      - label: "Guía oficial de C++ en VS Code"
        url: "https://code.visualstudio.com/docs/languages/cpp"
    command: "g++ --version"
    outcome: "La extensión aporta edición e IntelliSense, pero NO incluye un compilador. Si este comando falla, el entorno aún no está completo."
  - id: sql
    label: "SQL"
    title: "SQL: empezar simple"
    instructions:
      - "Usa SQLite Fiddle para comenzar sin instalación."
      - "Después instala la CLI de SQLite."
      - "Cuando domines tablas, consultas y JOIN, pasa a PostgreSQL."
    resources:
      - label: "Abrir SQLite Fiddle"
        url: "https://sqlite.org/fiddle/"
      - label: "Descargar SQLite"
        url: "https://sqlite.org/download.html"
      - label: "Descargar PostgreSQL"
        url: "https://www.postgresql.org/download/"
    command: "sqlite3 --version"
    outcome: "SQLite reduce la fricción inicial. PostgreSQL llega después para aprender servidor, usuarios, conexiones y administración."
---

Esta clase prepara un entorno común para practicar los cinco lenguajes y SQL. La meta no es instalar herramientas por instalar: cada instalación debe terminar con una comprobación observable desde el editor o la terminal.

En cada pestaña encontrarás instrucciones, enlaces oficiales, un comando de verificación y el resultado que debes entender antes de avanzar.

## Criterio de salida

El entorno está listo cuando puedes abrir la carpeta del curso, ejecutar una comprobación y explicar qué herramienta produjo el resultado. La configuración específica de cada equipo puede variar; sigue la documentación oficial vinculada en cada pestaña.
