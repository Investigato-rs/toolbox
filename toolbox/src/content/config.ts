import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Extend the default Starlight docs schema for investigations
const istrazivanjaCollection = defineCollection({
  schema: docsSchema({
    extend: z.object({
      tezina: z.enum(['pocetno', 'srednje', 'napredno']).optional(),
      jurisdikcija: z.string().optional(),
      poslednja_provera: z.string().optional(),
      povezane_baze: z.array(z.string()).optional(),
    }),
  }),
});

// Extend the default Starlight docs schema for databases
const bazePodatakaCollection = defineCollection({
  schema: docsSchema({
    extend: z.object({
      url: z.string().url().optional(),
      tip: z.enum([
        'zvanicni-registar',
        'javni-portal',
        'privatna-baza',
        'agregator',
        'alat'
      ]).optional(),
      pruzalac: z.string().optional(),
      pristup: z.enum(['besplatan', 'registracija', 'placen', 'delomicno-besplatan']).optional(),
      potrebna_prijava: z.boolean().optional(),
      jezici: z.array(z.string()).optional(),
      pretraga_po: z.array(z.string()).optional(),
      izlaz: z.array(z.string()).optional(),
      poslednja_provera: z.string().optional(),
      geografija: z.enum(['srbija', 'region', 'globalno']).optional(),
      funkcija: z.string().optional(),
    }),
  }),
});

export const collections = {
  docs: istrazivanjaCollection,
  'baze-podataka': bazePodatakaCollection,
};
