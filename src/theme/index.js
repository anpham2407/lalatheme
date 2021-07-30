import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { ThemeProvider, createTheme, StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.overrides = componentsOverride(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
