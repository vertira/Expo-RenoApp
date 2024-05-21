import React from 'react';
import { Text, TextProps } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';

// Definicja typów dla GradientTextProps
interface GradientTextProps extends TextProps {
  lightColors?: string[]; // Opcjonalne
  darkColors?: string[]; // Opcjonalne
}

const GradientText: React.FC<GradientTextProps> = ({
  lightColors = ["white", "#2cbb63"], // Domyślne kolory dla jasnego motywu
  darkColors = ["white", "#2cbb63"], // Domyślne kolory dla ciemnego motywu
  style,
  ...props
}) => {
  const theme = useColorScheme(); // Pobierz aktualny motyw
  const colors = theme === 'dark' ? darkColors : lightColors;

  return (
    <MaskedView maskElement={<Text {...props} style={style} />}>
      <LinearGradient
        colors={colors}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.6 }}
      >
        <Text {...props} style={[style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
