import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { IoMdNutrition } from 'react-icons/io';

export default function Sidebar() {
  return S.list()
    .title(`Marijo Fit Life`)
    .items([
      S.listItem()
        .title('Inicio')
        .icon(() => <IoMdNutrition />)
        .child(S.editor().schemaType('siteSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
    ]);
}
