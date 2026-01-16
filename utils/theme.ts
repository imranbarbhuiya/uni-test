import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { Appearance } from 'react-native';
import { Uniwind } from 'uniwind';

export type UniwindThemes = typeof Uniwind.currentTheme | 'system';
type NativeColorScheme = 'light' | 'dark' | undefined;

export const getNativeColorScheme = (
  theme: UniwindThemes,
): NativeColorScheme => {
  return theme as NativeColorScheme;
};

const LightNavigationTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    card: '#fff',
  },
};

export const getNavigationTheme = (uniwindTheme: UniwindThemes) => {
  const themeMap: Record<
    UniwindThemes,
    typeof DarkTheme | typeof DefaultTheme
  > = {
    light: LightNavigationTheme,
    dark: DarkTheme,
    system: Appearance.getColorScheme() === 'dark' ? DarkTheme : DefaultTheme,
  };
  return themeMap[uniwindTheme];
};
