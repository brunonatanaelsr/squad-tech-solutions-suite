/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_CONTACT_API_URL: string
  readonly VITE_SITE_URL: string
  readonly VITE_COMPANY_NAME: string
  readonly VITE_COMPANY_EMAIL: string
  readonly VITE_COMPANY_PHONE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
