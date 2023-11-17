import React, { useMemo } from 'react';
//@ts-ignore
import { Svg, Path } from 'react-native-svg';
import * as selectionData from './selection.json';
import type { IconMap, IconMoonProps } from './types';

const IconMoon: React.FC<IconMoonProps> = ({
  size = 32,
  color = '#222',
  name,
  offset = 0,
  strokeWidth = 1,
}) => {
  if (!selectionData || !name) {
    console.error('The "selectionData" and "name" props are required.');
    return null;
  }

  const viewBoxMax = 1024;
  const localOffset = (offset / 2) * -viewBoxMax;
  const offsetedViewBox = viewBoxMax - localOffset;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentIcon: IconMap | undefined = useMemo(() => {
    return selectionData.icons
      .map((i: any) => {
        return {
          name: i.properties.name,
          paths: i.icon.paths,
        } as IconMap;
      })
      .find((i: IconMap) => {
        return i.name === name;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionData, name]);

  if (currentIcon === undefined) {
    console.error(`Icon "${name?.toString()}" not found.`);
    return null;
  }

  const paths = currentIcon.paths.map((p, i) => (
    <Path key={String(i)} d={p} strokeWidth={5 * strokeWidth} stroke={color} />
  ));

  return (
    <Svg
      width={String(size)}
      height={String(size)}
      fill={color}
      viewBox={`${localOffset} ${localOffset} ${offsetedViewBox} ${offsetedViewBox}`}
    >
      {paths}
    </Svg>
  );
};

export default IconMoon;
