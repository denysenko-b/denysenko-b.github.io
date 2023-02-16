import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";
import siteconfig from "./src/siteconfig";


export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    ...siteconfig
                },
                ejsOptions: {
                    root: path.join(__dirname, "partials")
                }
            }
        })
    ],
    server: {
        host: '192.168.1.7'
    },
    build: {
        assetsInlineLimit: 0
    }
});
