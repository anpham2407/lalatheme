import React from "react";
import UserIcon from "./svgIcons/User";
import Logo from "./svgIcons/Logo";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    padding: theme.spacing(1, 4),
  }
}));

const Header = () => {
  const classes = useStyles();
  const NavBox = styled("div")(() => ({
    flexGrow: 1,
  }));
  const ActionGroup = styled("div")(() => ({
    width: 200,
  }));

  return (
    <header className={classes.header} >
      <Logo viewBox="0 0 608.6 271.5" />
      <NavBox>text here</NavBox>
      <ActionGroup>action group</ActionGroup>
      <UserIcon color="primary" />
    </header>
  );
};

export default React.memo(Header);
