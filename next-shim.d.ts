declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "next" {
  export type Metadata = any;
}

declare module "next/font/google" {
  export function Inter(options?: any): any;
  export function Anton(options?: any): any;
}
