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
                    icon: "linkedin",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/joannavarropalatsi/",
                },
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/navarropalatsi",
                },
            ],
            sidebar: [
                {
                    label: "Sistemas Microinformáticos y Redes",
                    items: [
                        {
                            label: "Aplicaciones Web",
                            items: [
                                {
                                    label: "Módulo 1",
                                    items: [
                                        {
                                            label: "1. Introducción a los Lenguajes de Etiquetas y HTML",
                                            slug: "smr/mp-0228/modulo-1/sesion-1",
                                        },
                                    ],
                                },
                            ],
                        },
                    ]
                }
            ],
        }),
    ],
});
