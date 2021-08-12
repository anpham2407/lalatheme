const headerStyle = {
  header: {
    display: "flex",
    padding: '10px 20px'
  },
  logo: {
    flex: 1,
    '& svg': {
      width: 190,
      height: 46
    }
  },
  nav: {
    color: 'red',
    '&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  actionGroup: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
  },
};

export default headerStyle;
