import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";

Layout.propTypes= {
  children: PropTypes.node
};

export default function Layout({ children }) {

  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <div id="main">
        <h1>header</h1>
        {children}
        <h2>footer</h2>
      </div>
    </div>
  );
}
