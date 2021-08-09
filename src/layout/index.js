import Head from "next/head";
import React from "react";
import Header from './../components/Header'
import PropTypes from 'prop-types';

Layout.propTypes= {
  children: PropTypes.node
};


export default function Layout({ children, title }) {
  return (
    <div id="wrapper">
      <Head>
        <title>{title}</title>
      </Head>
      ssss---
      {/* <Header /> */}
      <div id="main">{children}</div>
      <footer>asdasd</footer>
    </div>
  );
}
