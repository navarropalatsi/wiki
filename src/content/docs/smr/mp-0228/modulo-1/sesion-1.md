---
title: "Sesión 1 - Introducción a los Lenguajes de Etiquetas y HTML"
---

# Sesión 1: Introducción a los Lenguajes de Etiquetas y HTML

## Objetivos de la sesión
En esta sesión, comprenderás qué es un **lenguaje de etiquetas**, por qué se utiliza en la web, y cómo se estructura un documento HTML básico. No necesitas conocimientos previos: empezaremos desde cero, como si nunca hubieras escuchado hablar de HTML.

---

## 1. ¿Qué es un lenguaje de etiquetas?
Un **lenguaje de etiquetas** es un conjunto de instrucciones que indican a un ordenador cómo debe estructurar y mostrar información.  
Estas instrucciones se escriben dentro de **etiquetas**.

💡 **Metáfora:** Piensa en las etiquetas como señales en una obra de teatro. Los actores (el contenido) necesitan indicaciones: cuándo hablar, cómo moverse, qué ropa llevar. Las etiquetas cumplen ese papel para el navegador.

Ejemplo de etiqueta:
```html
<p>Hola mundo</p>
```
Aquí, `<p>` indica que el texto es un **párrafo**. El navegador lo interpreta y lo muestra en pantalla como texto normal.

---

## 2. ¿Qué es HTML?
HTML significa **HyperText Markup Language** (Lenguaje de Marcado de Hipertexto). Es el idioma que entienden todos los navegadores para mostrar páginas web.

HTML no es un lenguaje de programación (no puede "calcular" ni "tomar decisiones"), sino un lenguaje para **estructurar contenido**.

📌 **Ejemplo de funciones de HTML:**
- Mostrar títulos y párrafos.
- Insertar imágenes.
- Crear enlaces entre páginas.
- Organizar listas y tablas.

---

## 3. Anatomía de una etiqueta
Una etiqueta HTML básica se compone de:
- **Etiqueta de apertura**: `<p>`
- **Contenido**: el texto o elementos que queremos mostrar.
- **Etiqueta de cierre**: `</p>`

Ejemplo:
```html
<h1>Bienvenidos a la web</h1>
```
- `<h1>` es la etiqueta de apertura.
- `Bienvenidos a la web` es el contenido.
- `</h1>` es la etiqueta de cierre.

🔍 **Nota:** Algunas etiquetas no tienen cierre (etiquetas vacías), como `<img>` para imágenes.

---

## 4. Estructura mínima de un documento HTML
Un archivo HTML básico tiene esta estructura:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Este es mi primer documento HTML.</p>
  </body>
</html>
```

📌 **Explicación:**
- `<!DOCTYPE html>`: indica que usamos HTML5.
- `<html>`: raíz del documento.
- `<head>`: contiene información para el navegador (no visible).
- `<body>`: contiene el contenido visible en la página.

---

## 5. Herramientas para trabajar con HTML
Para empezar, solo necesitas:
1. Un **editor de texto** (ej: Visual Studio Code, Sublime Text, Notepad++).
2. Un **navegador web** (Chrome, Firefox, Edge, etc.).

💡 Consejo: guarda los archivos con la extensión `.html` y abre el archivo en el navegador para ver los cambios.

---

## 6. Resumen de la sesión
- HTML es un lenguaje de etiquetas para estructurar contenido en la web.
- Las etiquetas se abren y cierran, y algunas no tienen cierre.
- Un documento HTML tiene una estructura básica con `<html>`, `<head>` y `<body>`.

---

> 💪 **Sugerencia de práctica**:  
> Crea un archivo `index.html` en tu ordenador, escribe el ejemplo de la estructura mínima y modifícalo para que muestre tu nombre en un título (`<h1>`) y una breve descripción sobre ti en un párrafo (`<p>`).
