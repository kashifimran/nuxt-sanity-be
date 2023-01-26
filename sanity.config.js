import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity',
  projectId: '',
  dataset: 'dev',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
