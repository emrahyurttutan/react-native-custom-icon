import fs from 'fs';
import * as iconSet from './src/selection.json';

const typeIconList = () => {
  const iconNames = [];
  if (iconSet && Array.isArray(iconSet.icons)) {
    iconSet.icons.forEach((icon) => {
      iconNames.push(`"${icon.properties.name}"`);
    });
  }
  return iconNames?.join(' | ');
};

function main() {
  fs.writeFile(
    './src/types.ts',
    `export interface IconMoonProps {
          name: ${typeIconList()};
          color?: string;
          size?: number;
          strokeWidth?: number;
          offset?: number;
        }
      
        export interface IconMap {
          name: string;
          paths: Array<string>;
        }  `,
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    }
  );
}

main();
