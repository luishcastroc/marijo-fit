import { IoMdNutrition as icon } from "react-icons/io";
export default {
  name: "siteSettings",
  type: "document",
  title: "Ajustes del Sitio",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "description",
      type: "text",
      title: "Descripción",
      description:
        "Describe tu blog para busquedas en google y redes sociales.",
    },
    {
      name: "phone",
      type: "string",
      title: "Teléfono",
      description: "Teléfono de contacto que será usado en el pié de página",
    },
    {
      name: "email",
      type: "string",
      title: "E-mail",
      description: "mail de contacto que será usado en el pié de página",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "agrega palabras clave que describan tu blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "links",
      title: "Enlaces de Interés",
      type: "array",
      of: [{ type: "reference", to: [{ type: "link" }] }],
      validation: (Rule) => Rule.max(6),
    },
    {
      name: "socialnetworks",
      title: "Redes Sociales",
      type: "array",
      of: [{ type: "reference", to: [{ type: "social" }] }],
      validation: (Rule) => Rule.max(3),
    },
  ]
};
