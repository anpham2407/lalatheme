import Head from "next/head";
import React, { useEffect } from "react";
import Box from '@material-ui/core/Box';
const BagIcon = "/icons/bag.svg";
const Handbag = "/icons/handbag.svg";
const Favourite = "/icons/favourite.svg";
const LogoIcon = "/icons/logo.svg";
import Header from './../components/Header'

// const Header = styled('header')(({ theme }) => ({
//     display: "flex",
//     padding: theme.spacing(1, 4),
// }));
// const Logo = styled('div')(({ theme }) => ({
//     display: "block",
//     width: 120
// }));
export default function Layout({ children, title }) {
  return (
    <div id="wrapper">
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Header /> */}
      <div id="main">{children}</div>
      <footer>asdasd</footer>
    </div>
  );
}
