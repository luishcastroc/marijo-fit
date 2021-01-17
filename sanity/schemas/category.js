import { CgFileDocument as icon } from 'react-icons/cg';
export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
  ],
};
