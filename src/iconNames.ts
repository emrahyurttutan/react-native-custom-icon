import selectionData from './selection.json';

export const iconNames = () => {
  if (selectionData && Array.isArray(selectionData.icons)) {
    return selectionData.icons.map((icon) => icon.properties.name);
  }
  return [];
};

export default iconNames;
