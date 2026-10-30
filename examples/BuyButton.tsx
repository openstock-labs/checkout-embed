'use client'

import Script from 'next/script'

export function BuyButton({ product, store }: { product: string; store: string }) {
  return (
    <>
      <Script src="https://openstock.dev/embed.js" strategy="afterInteractive" />
      <button type="button" data-product={product} data-store={store}>
        Buy now
      </button>
    </>
  )
}
