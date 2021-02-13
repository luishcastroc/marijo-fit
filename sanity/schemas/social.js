import { IoMdShare as icon } from 'react-icons/io';
export default {
  name: 'social',
  title: 'Red Social',
  type: 'document',
  icon,
  fields: [
    {
      name: 'type',
      title: 'Tipo',
      type: 'string',
    },
    {
      name: 'user',
      title: 'Usuario',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Enlace',
      type: 'string',
    },
  ],
};