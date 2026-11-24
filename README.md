# Maleta en Fuga

Agencia ficticia de escapadas por Chile. El catálogo muestra el país y las actividades de cada destino. En el detalle se pueden comparar vuelos y hoteles por precio, fechas y disponibilidad.

## Ejecutar en local

Requiere Node.js 22.12 o posterior.

```sh
npm ci
npm run dev
```

## Integración

| Interfaz | Operación | Datos |
| --- | --- | --- |
| REST | `GET api/destinos` | Destinos, países y actividades populares |
| GraphQL | `OpcionesDestino(destinoId: ID!)` | Vuelos y hoteles del destino seleccionado |

MSW intercepta ambas solicitudes en el navegador. GraphQL valida las consultas con un esquema y devuelve los campos solicitados. Apollo Client mantiene en caché las opciones consultadas. React Router usa rutas con hash para abrir enlaces directos desde GitHub Pages.

## Verificar la compilación

```sh
npm run lint
npm run build
npm run preview
```

Comprueba el catálogo, abre cada destino y revisa los precios en CLP, las fechas y los cupos. Recarga una ruta de detalle y verifica que el enlace de regreso abra el catálogo. Prueba también una ruta inexistente y los estados de error y reintento de ambas API.

La compilación se verificó en Chromium 149 y Firefox 151 a 320, 390, 768 y 1440 px. En ambos navegadores se comprobó la apertura de los tres destinos, el enlace directo, la página de error y la recuperación tras un fallo simulado de REST y GraphQL.

## Publicación

[Sitio en GitHub Pages](https://jotaxiii.github.io/viajes-juan-osega-pfy2202/)

La aplicación se publica en la rama `gh-pages`. Con el remoto `origin` configurado, ejecuta `npm run deploy` para actualizar la compilación publicada.
