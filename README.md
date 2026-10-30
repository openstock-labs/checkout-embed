# OpenStock checkout embed

Sell from any website with a script tag and a button. Clicking the button opens your [OpenStock](https://openstock.dev) checkout in a modal (a bottom sheet on phones). Prices, stock and delivery come from your dashboard, so there's no API key in the browser.

Live demo: [docs.openstock.dev/embed](https://docs.openstock.dev/embed)

```html
<script src="https://openstock.dev/embed.js" defer></script>

<button data-product="your-product-id" data-store="your-store">Buy now</button>
```

You can copy the button for any product from Catalog > Products > Embed checkout in the dashboard. Buttons added after the page loads (for example by React) work too.

## Button attributes

- `data-product`: product ID (required, or use `data-bundle` for a bundle)
- `data-store`: your store slug (required)
- `data-lang`: `en`, `es`, `fr`, `de`, `ja` or `zh`; defaults to the page language
- `data-store-url`: your custom store domain, e.g. `https://shop.example.com`

## JavaScript

```js
OpenStock.open('your-product-id', { store: 'your-store' })
OpenStock.openBundle('your-bundle-id', { store: 'your-store' })
OpenStock.preload('your-product-id', { store: 'your-store' })
OpenStock.close()
```

`openstock-embed.d.ts` has types for `window.OpenStock` if you use TypeScript.

The embed dispatches `openstock-checkout-open`, `openstock-purchase-complete` and `openstock-purchase-error` on `window`. Use them for UI and analytics only; confirm payments on your server with [webhooks](https://github.com/openstock-labs/openstock-node#webhooks).

## Content Security Policy

```
script-src https://openstock.dev;
frame-src  https://your-store.openstock.dev;
style-src  'unsafe-inline';
```

Use your custom domain in `frame-src` if the store has one.

Examples: [plain HTML](./examples/index.html), [React](./examples/BuyButton.tsx).
