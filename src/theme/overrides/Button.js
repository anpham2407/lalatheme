// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      root: {
        fontSize: '1rem',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      sizeLarge: {
        height: 48
      },
      containedPrimary: {
        boxShadow: 'none'
      },
      containedSecondary: {
        boxShadow: 'none'
      }
    }
  };
}
