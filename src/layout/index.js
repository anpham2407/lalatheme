import Head from "next/head";
import React from "react";
import Header from './../components/Header'

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
