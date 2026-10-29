# 1. La app se publica en GitHub Pages y bilateria.org redirige a ella

Fecha: 2026-10-29 · Estado: aceptado

## Contexto

La app nació en junio de 2025 como una página HTML suelta, hecha con Claude y
alojada en `https://bilateria.org/docs/bilateria/age-sound-generator.html`, el
hosting de IONOS de Juanjo. No tenía repositorio ni licencia en el código: solo la
declaraba la ficha del Repositorio de recursos educativos digitales de Vibe Coding
Educativo. La revisión de ese repositorio del 29-10-2026 la marcó como «sin
licencia», y Juanjo pidió pasarla a GitHub, añadirle lo que le faltaba, dejar una
redirección en bilateria y cambiar el enlace en el repositorio.

## Decisión

- El código vive en `github.com/jjdeharo/generador-sonidos-edad` y se publica con
  GitHub Pages desde la rama `main`, en
  `https://jjdeharo.github.io/generador-sonidos-edad/`.
- La dirección antigua de bilateria.org sigue funcionando: devuelve una redirección
  permanente (301) a la nueva, con una regla en el `.htaccess` de su carpeta, y el
  archivo antiguo se sustituye por una página que también redirige, por si la regla
  dejara de aplicarse.
- La ficha del repositorio de VCE pasa al enlace nuevo, con la licencia que consta
  ahora en el código.
- Sigue siendo una sola página HTML sin dependencias externas y sin analítica: no
  guarda nada ni se comunica con ningún servidor.

## Alternativas descartadas

- Dejarla en bilateria.org y añadir solo la licencia: el código no se podría
  examinar ni seguir con control de versiones, y la guía «Vibe coding responsable»
  pide repositorio, ADR y etiqueta de versión para lo que se publica en un sitio propio.
- Una organización propia de GitHub con su repositorio `<nombre>.github.io`: es lo
  habitual para las aplicaciones de Juanjo, pero para una página suelta de este
  tamaño basta un repositorio en su cuenta, como otras apps pequeñas suyas
  (`jjdeharo.github.io/millonario`, `jjdeharo.github.io/diario`).
- Borrar el archivo de bilateria: rompería los enlaces que ya circulan.

## Consecuencias

- Los cambios se hacen en el repositorio; el archivo de bilateria ya no se toca.
- Quien abra el enlace antiguo llega a la versión nueva sin hacer nada.

## Evidencia

- Archivo original descargado de IONOS el 29-10-2026 (26.067 bytes, modificado el
  12-07-2025). Es la base del primer commit de `index.html`.

## Riesgos y limitaciones

- Si la redirección de IONOS desaparece (por ejemplo, al rehacer el `.htaccess`),
  la página de respaldo sigue redirigiendo.

## Validación

- `curl -I` sobre la dirección antigua devuelve 301 con la nueva en `Location`.
