# Proyecto Final - E-commerce (React + Firestore)

Resumen
- SPA de e-commerce construida con React, React Router y Firestore (Firebase).
- Funcionalidades: listado por categorías, detalle de producto, carrito (Context), checkout que genera ordenes en Firestore.

Requisitos
- Node >= 16, npm
- Cuenta Firebase con Firestore habilitado

Instalación
1. Clona el repo:

```bash
git clone <tu-repo-url>
cd ProyectoFinal+Apellido
```

2. Instala dependencias:

```bash
npm install
```

3. Variables de entorno (no subir al repo)
- Crea un archivo `.env` en la raíz y añade tu configuración de Firebase con prefijo `VITE_`.
- Usa el archivo `.env.example` como plantilla.

```text
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Nota: `src/firebase/config.js` ahora lee las variables desde `import.meta.env` (Vite). No subas tu `.env` al repositorio.

Ejecutar en desarrollo

```bash
npm run dev
```

Abrir en el navegador: http://localhost:5176/

Sembrar productos (dev)
- Para evitar crear documentos manualmente, hay una ruta dev que si la visitas siembra los productos de ejemplo en Firestore: `/seed`.
- Accede solo en modo desarrollo: `http://localhost:5176/seed`

Estructura y componentes clave
- `src/context/CartContext.jsx`: Provider del carrito y funciones (`addItem`, `removeItem`, `clear`, `totalQuantity`, `totalPrice`). Valida stock y evita sobreventa.
- `src/services/productService.js`: consultas a Firestore (`getProducts`, `getProductById`).
- `src/components/ItemListContainer.jsx`, `ItemList.jsx`, `Item.jsx`: listado de productos y filtrado por categoría.
- `src/components/ItemDetailContainer.jsx`, `ItemDetail.jsx`, `ItemCount.jsx`: detalle de producto y selección de cantidad (oculta el contador tras agregar).
- `src/components/Cart.jsx`, `src/components/CartWidget.jsx`: vista del carrito y widget con total de unidades.
- `src/components/CheckoutForm.jsx`: formulario de checkout que crea una orden en la colección `orders` y muestra el ID.

Buenas prácticas y entrega
- No subir credenciales. Usa `.env` y `VITE_`.
- Asegúrate de que el repositorio sea público y tenga el nombre solicitado por la consigna (ej: `ProyectoFinal+Apellido`).
- Documenta en el README si hiciste cambios adicionales (env, deploy, etc.).

Deploy
- Puedes desplegar en Vercel o Netlify; recuerda configurar las variables de entorno en el panel del servicio.

Checklist para entrega
- [ ] Repo público en GitHub nombrado `ProyectoFinal+Apellido`
- [ ] README con instrucciones completas (este archivo)
- [ ] Variables de entorno explicadas
- [ ] Firestore con colección `products` poblada (o indicar en README cómo sembrarla)

---
Fecha: 2026-02-19
Trabajo Practico n°1 
Alumno: Nicolas Vega 
Comision: 88100




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
