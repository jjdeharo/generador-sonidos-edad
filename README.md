# Generador de Sonidos por Edad

Genera tonos agudos para explorar cómo cambia la audición con la edad.

**Abrir la aplicación:** https://jjdeharo.github.io/generador-sonidos-edad/

- **Modo test:** un barrido continuo de 20 000 Hz a 2000 Hz en un minuto. Se pulsa
  «¡Lo escucho!» cuando empieza a oírse, y la app da la frecuencia y la edad a la
  que suele corresponder.
- **Modo manual:** seis tonos fijos, de 18 000 Hz a 8000 Hz, cada uno con la edad
  hasta la que se suele oír.

Es una exploración orientativa, no una prueba de audición: el resultado depende
también de los auriculares, los altavoces y el volumen.

No guarda nada, no pide datos y no se comunica con ningún servidor: los tonos los
genera el navegador con la Web Audio API.

## Organización

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación entera: estructura, estilos y código. |
| `icono.svg` | Icono de la pestaña («ear» de Lucide, licencia ISC). |
| `og.png` | Imagen de la vista previa al compartir el enlace. |
| `tests/app.spec.js` | Pruebas de los recorridos principales y de accesibilidad. |
| `playwright.config.js`, `package.json` | Configuración de las pruebas. |
| `.github/workflows/pruebas.yml` | Pasa las pruebas en GitHub con cada cambio. |
| `docs/adr/` | Registro de decisiones. |
| `CHANGELOG.md` | Cambios de cada versión. |

## Pruebas

```bash
npm ci
npx playwright install chromium firefox
npm test
```

Comprueban, en Chromium, Firefox y un móvil, que los dos modos funcionan, que se
puede manejar con el teclado y que axe no encuentra fallos de accesibilidad
(WCAG 2.1 AA). Lo que deben comprobar las personas: que los tonos se oyen y que
los textos sobre la edad y la audición son correctos.

## Licencias

- Código: [AGPL v3](LICENSE) (`AGPL-3.0-or-later`).
- Textos: [CC BY-SA 4.0](LICENSE-CONTENIDOS).
- Icono: «ear» de [Lucide](https://lucide.dev), licencia ISC.

© 2025-2026 [Juan José de Haro](https://bilateria.org).

## Uso de IA

[Nivel 4 del MIAE](https://jjdeharo.github.io/miae/?nivel=4): programado con Claude
en junio de 2025 y preparado para su publicación con Claude Code en octubre de 2026.

Antes estaba en `bilateria.org/docs/bilateria/age-sound-generator.html`, que ahora
redirige aquí.
