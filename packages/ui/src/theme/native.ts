import { colors, spacing, typography } from '../constants';

export const createNativeTheme = () => ({
  colors,
  spacing: Object.entries(spacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: parseInt(value.replace('px', '')),
    }),
    {},
  ),
  typography: {
    ...typography,
    sizes: Object.entries(typography.sizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: parseInt(value.replace('px', '')),
      }),
      {},
    ),
  },
});
