import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, './src/renderer/src/'),
			"@/components": `${path.resolve(__dirname, './src/renderer/src/components/')}`,

			"@/lib": `${path.resolve(__dirname, './src/renderer/src/lib/')}`,

		}
		/* 		alias: {
			"@": path.resolve(__dirname, './src/renderer/src')
		} */
		/* 		alias: [
			{ find: '@', replacement: path.resolve(__dirname, './src/renderer/src') },
			{ find: '@/components', replacement: path.resolve(__dirname, './src/renderer/src/components/') },
			{ find: '@/lib', replacement: path.resolve(__dirname, './src/renderer/src/lib/') },
		], */
	}
});
