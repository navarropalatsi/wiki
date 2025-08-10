// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    // URL pública donde se servirá la wiki
    site: "https://navarropalatsi.github.io/wiki",
    // Base path: si tu repo se publica en https://user.github.io/repo, p.ej. '/repo/'
    base: "/wiki/",
    // Salida estática
    output: "static",
    integrations: [
        starlight({
            title: "My Docs",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
                },
            ],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", slug: "guides/example" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});
