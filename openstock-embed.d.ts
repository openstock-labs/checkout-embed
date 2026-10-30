/**
 * Types for the hosted OpenStock checkout embed (https://openstock.dev/embed.js).
 * Copy this file into your project, or reference it with a triple-slash directive.
 */

export type OpenStockLanguage = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh'

export interface OpenStockOpenOptions {
  /** Store slug. Required when there is no matching product button on the page. */
  store?: string
  lang?: OpenStockLanguage
  /** Custom store origin such as https://shop.example.com. Defaults to the store's openstock.dev subdomain. */
  storeUrl?: string
  /** Path on the store origin. Defaults to /checkout. */
  checkoutPath?: string
}

export interface OpenStockEmbedConfig {
  checkoutPath: string
  iframeTimeout: number
  animations: boolean
  mobileBottomSheet: boolean
  retryOnError: boolean
  maxRetries: number
  debug: boolean
}

export interface OpenStockEmbed {
  readonly version: string
  open(productId: string, options?: OpenStockOpenOptions): void
  openBundle(bundleId: string, options?: OpenStockOpenOptions): void
  close(): void
  preload(productId: string, options?: OpenStockOpenOptions): void
  retry(productId: string, options?: OpenStockOpenOptions): void
  clearCache(): void
  destroy(): void
  configure(options: Partial<OpenStockEmbedConfig>): void
  getConfig(): OpenStockEmbedConfig
}

declare global {
  interface Window {
    OpenStock?: OpenStockEmbed
  }
  interface WindowEventMap {
    'openstock-checkout-open': CustomEvent<{ productId: string; storeSlug: string; lang: string }>
    'openstock--open': CustomEvent
    'openstock--close': CustomEvent
    'openstock-purchase-complete': CustomEvent<Record<string, unknown>>
    'openstock-purchase-error': CustomEvent<unknown>
  }
}
