import React from 'react';
import UserIcon from './svgIcons/User';
import Logo from './svgIcons/Logo';
import { makeStyles } from '@material-ui/core/styles';
import headerStyle from 'styles/components/headerStyle';
import NavTop from './NavTop';

const makeComponentStyles = makeStyles(() => ({
  ...headerStyle,
}));

const Header = () => {
  const classes = makeComponentStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo viewBox="0 0 229 56" />
      </div>
      <div className={classes.nav_menu_top}>
        <NavTop />
      </div>
      <div className={classes.actionGroup}>
        <UserIcon color="primary" />
      </div>
    </header>
  );
};

export default React.memo(Header);
