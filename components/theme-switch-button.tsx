import { IconSymbol, IconSymbolName } from '@/components/icon-symbol';
import { UniwindThemes } from '@/utils/theme';
import { HeaderButton } from '@react-navigation/elements';
import { router } from 'expo-router';
import { useResolveClassNames } from 'uniwind';

const THEME_ICON_NAMES: Record<UniwindThemes, IconSymbolName> = {
  dark: 'moon.fill',
  light: 'sun.max.fill',
  system: 'circle.righthalf.filled',
};

export function ThemeSwitchButton() {
  const primaryStyle = useResolveClassNames('bg-primary');

  const iconName = THEME_ICON_NAMES.system;

  return (
    <HeaderButton onPress={() => router.push('/theme-selector')}>
      <IconSymbol
        name={iconName}
        size={24}
        color={primaryStyle.backgroundColor as string}
        animationSpec={{
          speed: 4,
          effect: {
            type: 'bounce',
          },
        }}
      />
    </HeaderButton>
  );
}
