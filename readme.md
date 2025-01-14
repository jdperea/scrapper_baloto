# Scraper de Resultados del Baloto 🎱

Este proyecto es un scraper automatizado que extrae todos los resultados históricos del Baloto y Revancha desde el sitio oficial de Baloto Colombia.

## 🚀 Características

- Extrae resultados tanto del Baloto como de Revancha
- Guarda los resultados en formato JSON
- Incluye fechas de los sorteos
- Automatización completa usando Playwright
- Manejo de paginación automático
- Datos estructurados y fáciles de analizar

## 📋 Estructura de los datos

Los resultados se guardan en un archivo JSON con la siguiente estructura:

```json
[
  {
    "title": "Baloto",
    "fecha": "11 Enero 2025",
    "result": {
        "normal": ["01", "15", "23", "35", "42"],
        "red": "06"
    }
  },
  {
    "title": "Revancha",
    "fecha": "11 Enero 2025",
    "result": {
        "normal": ["07", "12", "25", "38", "45"],
        "red": "07"
    }
  }
]
```

## 🛠️ Requisitos previos

- Node.js
- npm

## 📦 Dependencias

- Playwright

## 🚀 Instalación

1. Clona el repositorio:

    ``` bash
    git clone https://github.com/jdperea/scrapper_baloto
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Instala los navegadores de Playwright:

    ```bash
    npx playwright install chromium
    ```

## 💻 Uso

Ejecuta el script con:

```bash
node index.mjs
```

o con

```bash
npm run start
```

Los resultados se guardarán en un archivo `resultados_baloto.json` en el directorio raíz del proyecto.

## 📊 Datos obtenidos

El scraper obtiene:

- Tipo de sorteo (Baloto/Revancha)
- Fecha del sorteo
- Números ganadores (5 números normales + 1 super balota)

## ⚠️ Nota legal

Este scraper está diseñado para fines educativos y de análisis de datos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar.

## 📝 Licencia

[MIT](https://choosealicense.com/licenses/mit/)
