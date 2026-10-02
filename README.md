# Anuncios que Venden

Landing de venta mobile-first para **ANUNCIOS QUE VENDEN™ — Playbook + Kit de Anuncios**.

## Producto
- Precio de lanzamiento: **$14.900 ARS**
- Pago único
- Entrega digital
- Landing sin navegación ni distracciones
- CTA fijo en móvil
- Secciones orientadas a valor, preview del producto, método, objeciones y FAQ

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Checkout

Todos los CTA leen la variable:

```
NEXT_PUBLIC_CHECKOUT_URL
```

Cuando exista el link definitivo de pago, configurarlo en Vercel para producción y preview.

Si la variable todavía no existe, los botones llevan a la sección de oferta de la misma landing.

## Publicación prevista

Ruta final deseada: `https://viralio.net/ebook`.

Antes de pautar:
1. Conectar checkout real.
2. Incorporar TikTok Pixel / eventos de ViewContent, InitiateCheckout y Purchase.
3. Agregar datos legales/contacto y políticas definitivas del vendedor.
4. Verificar la landing completa en móvil.
