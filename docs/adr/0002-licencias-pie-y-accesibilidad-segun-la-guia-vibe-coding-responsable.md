# 2. Licencias, pie y accesibilidad según la guía «Vibe coding responsable»

Fecha: 2026-10-29 · Estado: aceptado

## Contexto

Al publicarla en un repositorio, la app tenía que cumplir la guía «Vibe coding
responsable» y las condiciones del repositorio de VCE: licencia abierta que conste
en el código, autoría, declaración del uso de IA y accesibilidad revisada con una
herramienta.

## Decisión

- Código bajo AGPL-3.0-or-later (`LICENSE` y línea SPDX al inicio de cada archivo
  de código) y textos bajo CC BY-SA 4.0 (`LICENSE-CONTENIDOS`), las licencias por
  defecto de la guía y las que ya declaraba la ficha de VCE para los contenidos.
- El pie lleva el título, `© 2025-2026 Juan José de Haro` enlazado a bilateria.org,
  la versión enlazada a sus notas, las dos licencias con su enlace, el código fuente
  y la declaración de IA con el nivel 4 del MIAE, la herramienta y la fecha.
- Contraste corregido para cumplir WCAG 2.1 AA: los azules, verdes, rojos y grises
  originales daban texto blanco o gris por debajo de 4,5:1. Se oscurecen sin cambiar
  el aspecto general. Foco visible para el teclado, anuncios para lectores de
  pantalla (`aria-live`) en lo que suena y en el resultado, y barra de progreso con
  `role="progressbar"`.
- Vista previa al compartir (Open Graph) con una captura de la pantalla de inicio
  (`og.png`) e icono «ear» de Lucide (licencia ISC), acreditado en el pie.
- Los textos de la app no se han cambiado.

## Alternativas descartadas

- Una licencia CC BY-SA también para el código: la guía recomienda AGPL v3 para el
  código, que es lo que obliga a compartir las mejoras aunque se sirva por internet.

## Consecuencias

- Cualquier cambio de colores pasa por la prueba de accesibilidad automática.

## Evidencia

- axe-core 4.14.0 a través de `@axe-core/playwright` 4.14.0, con las reglas WCAG 2.0 y
  2.1 A y AA, en las tres pantallas (`tests/app.spec.js`).

## Riesgos y limitaciones

- axe no comprueba todo lo que pide WCAG: el orden de lectura y la comprensión de
  los textos se revisan a mano.

## Validación

- `npx playwright test`: 11 pruebas superadas en Chromium, Firefox y móvil (Pixel 7)
  el 29-10-2026, sin fallos de accesibilidad.
