import { useHeaderHeight } from '@react-navigation/elements';
import { View } from 'react-native';

export default function ThemeSelectorSheet() {
  const headerHeight = useHeaderHeight();

  return (
    <View
      className="bg-background w-full flex-1 px-4 pt-1"
      style={{
        paddingTop: headerHeight,
        marginBottom: -headerHeight,
        borderWidth: 1,
        borderColor: 'transparent',
      }}
    ></View>
  );
}
