# Alisios · Presupuestos de flete

Aplicación web estática para editar, calcular, guardar y exportar ofertas de flete en PDF A4. Mantiene el formato visual de `cotizacion base.pdf` y usa las tarifas transcritas de los documentos aportados.

## Abrir la aplicación

La versión preparada para publicar está en la raíz del proyecto. Puedes abrir `index.html` directamente con Chrome o Edge. Para una vista local mediante HTTP:

```powershell
npm install
npm run build
npm run dev
```

Después abre `http://127.0.0.1:8765`.

## Datos y copias de seguridad

Los presupuestos y las tarifas se guardan en el almacenamiento local del navegador. Cada navegador y cada equipo tienen sus propios datos.

En **Presupuestos guardados** puedes:

- exportar una copia JSON con todas las tarifas y presupuestos;
- importar esa copia en otro navegador o equipo;
- abrir o duplicar presupuestos guardados.

La importación combina los presupuestos y aplica las tarifas de la copia como tarifas actuales.

## Publicar en GitHub Pages

Sube el contenido completo a un repositorio de GitHub. En la configuración del repositorio, activa GitHub Pages desde la rama principal y la carpeta raíz. Los archivos `index.html`, `app.js`, `styles.css`, `application.css`, `cabecera-alisios.png`, `favicon.svg` y `.nojekyll` forman la web publicada.

La aplicación no necesita servidor, base de datos ni variables secretas. Si el sitio publicado es público, cualquier persona con la dirección puede usar su propia copia de la aplicación, pero los datos que guarde permanecen en su navegador.

## Comprobaciones

`npm test` verifica los cálculos, el guardado local, el control de revisiones y la exportación e importación de copias. `node scripts/check-pdf.mjs` genera muestras PDF bajo `tmp/pdfs/`.

## Alcance actual

- Rutas Península → Canarias de los documentos aportados.
- Una línea de contenedor por oferta, con cantidad configurable.
- Madrid vía Huelva, radios terrestres, forraje, BES, seguro, equipos especiales y ajustes manuales.
- Las reglas ambiguas se muestran como observaciones o requieren un importe manual.
- Cada presupuesto conserva una copia de las tarifas con las que se calculó.
- Los datos comerciales deben revisarse antes de emitir una oferta.
