/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Allow importing .astro files in TS/TSX modules (ambient declaration)
declare module '*.astro' {
	const Component: any;
	export default Component;
}
