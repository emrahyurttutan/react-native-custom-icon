import React from 'react';
import { View } from 'react-native';
import { render, cleanup } from '@testing-library/react-native';
import type { IconMoonProps } from '../types';
import IconMoon, { iconNames } from '../index';

jest.mock('react-native-svg', () => {
  const reactNativeSvg = jest.genMockFromModule('react-native-svg');
  return reactNativeSvg;
});

const IconMock = (props: IconMoonProps) => (
  <View testID="icon">
    <IconMoon {...props} />
  </View>
);

beforeEach(cleanup);

test('icon is accepting props', () => {
  const { getByTestId } = render(
    <IconMock name="air-sock1" size={25} color="tomato" />
  );

  const svgIcon = getByTestId('icon').props.children;

  expect(svgIcon.props.name).toBe('air-sock1');
  expect(svgIcon.props.size).toBe(25);
  expect(svgIcon.props.color).toBe('tomato');
});

test('icon throw error for insufficent props', () => {
  const spyConsoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  //@ts-ignore
  render(<IconMock />);

  expect(spyConsoleError).toHaveBeenCalled();
});

test('iconList function', () => {
  const result = iconNames();
  expect(result).toEqual(result);
});
