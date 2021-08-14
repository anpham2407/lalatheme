const navTopStyle = {
  level_0: {
    display: 'inline-block',
    '&:hover': {
      '& $level_top_mega': {
        opacity: 1,
        top: '100%',
        visibility: 'visible'
      }
    }
  },
  magicmenu: {
    padding: 0,
    textAlign: 'left',
    position: 'relative',
    '&:before,&:after': {
      content:"''",
      display: 'table'
    },
    '& .nav_menu': {
      padding: 0,
      margin: 0,
      position: 'relative',
    },
    '& .level_0': {
      display: 'inline-block'
    },
    '& ul': {
      listStyle: 'none'
    }
  },
  level_top: {
    display: 'block',
    textTransform: 'capitalize',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 1,
    fontWeight: 700,
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#212B36"
  },
  level_top_mega: {
    top: '130%',
    position: 'absolute',
    boxShadow: 'inset 0px 0px 2px 0px rgb(0 0 0 / 8%)',
    backgroundColor: '#fff',
    marginLeft: -15,
    transition: 'all .3s ease-in-out 0s',
    opacity: 0,
    zIndex: 99999,
    visibility: 'hidden',
    // '&:hover': {
    //   opacity: 1,
    // },
    '& .content_mega': {
      display: 'block'
    },
    '& .content_mega_horizontal': {
      paddingLeft: 15,
      paddingRight: 15
    },
    '& .category_item': {
      display: 'flex'
    },
    '& .children': {
      width: 200,
      '&>a': {
        textTransform: 'capitalize',
        display: 'block',
        paddingTop: 28,
        paddingBottom: 8,
        paddingRight: 0
      }
    },
    '& .level1': {
      paddingTop: 6
    },
    '& .level2': {
      paddingBottom: 5,
      '&>a': {
        padding: 0,
        lineHeight: '30px',
        fontSize: 14,
        fontWeight: 400
      }
    }
  }
};

export default navTopStyle;
