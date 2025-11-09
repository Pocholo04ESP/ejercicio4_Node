# 🧩 Node Ejercicio 4

## Ejercicio 4 — Servidor Node + Descarga periódica + Análisis con Cheerio

### 📝 Descripción
Este proyecto implementa un **servidor en Node.js** que descarga periódicamente la página principal de **Steam** en español, guarda el HTML en un archivo y analiza su contenido utilizando **Cheerio**.

El servidor devuelve un objeto JSON con información básica de la página: el título del sitio y el número total de enlaces.

---

### ⚙️ Funcionalidad

#### 🌐 Descarga periódica
- Cada **60 segundos**, el servidor descarga el contenido de [store.steampowered.com](https://store.steampowered.com/?l=spanish).
- El HTML descargado se guarda automáticamente en el archivo `index.html`.
- Se extraen los siguientes datos:
  - **Título de la página** (`<title>`)
  - **Cantidad total de enlaces** (`<a>`)

#### 💻 Servidor HTTP
- Muestra la información procesada en formato **JSON** al acceder a:
  ```
  http://localhost:3000
  ```
- Ejemplo de salida:
  ```json
  {
    "url": "https://store.steampowered.com/?l=spanish",
    "ultima_descarga": "09/11/2025, 18:55:03",
    "titulo_extraido": "Bienvenido a Steam",
    "cantidad_enlaces": 358
  }
  ```

---

### 🚀 Ejecución

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor:
   ```bash
   npm start
   ```

3. Abrir en el navegador:
   👉 [http://localhost:3000](http://localhost:3000)

---

### 🧰 Tecnologías usadas
- Node.js  
- Cheerio  
- Módulos nativos: `http`, `https`, `fs`

---

### 📂 Estructura del proyecto

```
ejercicio4-node/
├── index.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

> ⚠️ **Nota:** El archivo `index.html` se genera automáticamente.

---

✍️ **Autor:** Javier Rozalén
