<p align="center">
  <a href="https://openstock.dev"><img src="https://openstock.dev/brand/mark.png" alt="OpenStock" width="64" height="64"></a>
</p>

<h1 align="center">OpenStock checkout embed</h1>

<p align="center">Sell digital products from any website with one script tag and a button.</p>

The [OpenStock](https://openstock.dev) checkout embed opens your store's checkout in a modal on your own site, or as a bottom sheet on phones. Buyers see your enabled payment methods, coupons, gift cards and optional Discord linking. Products, prices, stock and delivery come from your OpenStock dashboard, so no API key ever touches the browser.

**[Try the live demo →](https://docs.openstock.dev/embed)**

## Quick start

```html
<script src="https://openstock.dev/embed.js" defer></script>

<button data-product="your-product-id" data-store="your-store">Buy now</button>
```

Copy the exact button for any product from **Catalog → Products → ⋯ → Embed checkout** in your dashboard. Buttons added after page load, including ones rendered by React, work automatically. Disabled buttons don't open checkout.

## Button attributes

| Attribute | Required | Purpose |
| --- | --- | --- |
| `data-product` | Yes | Product ID to open |
| `data-store` | Yes | Your store slug |
| `data-lang` | No | `en`, `es`, `fr`, `de`, `ja` or `zh`. Defaults to the page or browser language |
| `data-store-url` | No | Your custom store origin, e.g. `https://shop.example.com` |
| `data-bundle` | No | Use instead of `data-product` to open a bundle |

## JavaScript API

```js
window.OpenStock.open('your-product-id', { store: 'your-store', lang: 'en' })
window.OpenStock.open('your-product-id', { store: 'your-store', storeUrl: 'https://shop.example.com' })
window.OpenStock.preload('your-product-id', { store: 'your-store' }) // warm up before a click
window.OpenStock.close()
```

| Method | Use |
| --- | --- |
| `open(productId, options)` | Open a product checkout |
| `openBundle(bundleId, options)` | Open a bundle checkout |
| `close()` | Close the modal and restore focus |
| `preload(productId, options)` | Load a checkout ahead of the click |
| `retry(productId)` | Reload a checkout that failed to load |
| `clearCache()` | Drop inactive cached checkouts |
| `configure(options)` | Change defaults such as `animations`, `mobileBottomSheet` or `iframeTimeout` |
| `destroy()` | Remove the modal, frames and listeners |

TypeScript users can copy [`openstock-embed.d.ts`](./openstock-embed.d.ts) for typed `window.OpenStock` and events.

## Events

```js
window.addEventListener('openstock-purchase-complete', (event) => {
  console.log('Checkout reported completion', event.detail)
})
```

| Event | Fires when |
| --- | --- |
| `openstock-checkout-open` | A product checkout opens (`productId`, `storeSlug`, `lang`) |
| `openstock--open` / `openstock--close` | The modal opens or closes |
| `openstock-purchase-complete` | The checkout reports a completed purchase |
| `openstock-purchase-error` | The checkout reports an error |

Browser events are for interface feedback and analytics. Confirm payment on your server with [signed webhooks](https://github.com/openstock-labs/openstock-node#webhooks) before fulfilling anything yourself. If `gtag` is on the page, a GA4 `purchase` event is sent automatically.

## Content Security Policy

```
script-src  https://openstock.dev;
frame-src   https://your-store.openstock.dev;   # or your custom store domain
style-src   'unsafe-inline';                    # the embed injects its modal styles
```

## Examples

- [`examples/index.html`](./examples/index.html): plain HTML
- [`examples/BuyButton.tsx`](./examples/BuyButton.tsx): Next.js / React

Need a server-created checkout instead of a product button? Use the [Checkout API](https://github.com/openstock-labs/openstock-node).

## Links

[OpenStock](https://openstock.dev) · [Docs](https://docs.openstock.dev) · [Examples](https://github.com/openstock-labs/examples) · [Discord](https://discord.gg/openstock)
