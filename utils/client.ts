import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '5drhcta7',
  dataset: 'production',
  apiVersion: '2022-09-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
