// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      root: {
        fontSize: '2rem',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      sizeLarge: {
        height: 48
      },
      containedPrimary: {
        boxShadow: theme.customShadows.primary
      },
      containedSecondary: {
        boxShadow: theme.customShadows.secondary
      }
    }
  };
}
