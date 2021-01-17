import { IoMdNutrition as icon } from 'react-icons/io';
export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Ajustes del Sitio',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripción',
      description: 'Describe tu blog para busquedas en google y redes sociales.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'agrega palabras clave que describan tu blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'posts',
      title: 'Publicaciones',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
  ],
};
