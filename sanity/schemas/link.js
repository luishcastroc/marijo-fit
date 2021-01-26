import { BsLink as icon } from 'react-icons/bs';
export default {
  name: 'link',
  title: 'Enlace',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Enlace',
      type: 'string',
    },
  ],
};