// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Investigato.rs Toolbox',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Srpski',
					lang: 'sr',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/investigato.rs' },
			],
			sidebar: [
				{
					label: 'Počni ovde',
					autogenerate: { directory: 'pocni-ovde' },
				},
				{
					label: 'Istraživanja',
					autogenerate: { directory: 'istrazivanja' },
				},
				{
					label: 'Baze podataka',
					items: [
						{
							label: 'Srbija',
							autogenerate: { directory: 'baze-podataka/srbija' },
						},
						{
							label: 'Region',
							autogenerate: { directory: 'baze-podataka/region' },
						},
						{
							label: 'Globalno',
							autogenerate: { directory: 'baze-podataka/globalno' },
						},
					],
				},
				{
					label: 'Alati',
					autogenerate: { directory: 'alati' },
				},
				{
					label: 'Uputstva',
					autogenerate: { directory: 'uputstva' },
				},
				{
					label: 'O projektu',
					autogenerate: { directory: 'o-projektu' },
				},
			],
		}),
	],
});
