import { colors, elevation, radius, spacing, typography } from '../constants';

export const createTailwindTheme = () => ({
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: typography.fonts,
      fontSize: typography.sizes,
      fontWeight: typography.weights,
      borderRadius: radius,
      elevation: elevation,
    },
  },
});
