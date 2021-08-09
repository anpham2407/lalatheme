import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "ProTip";
import Link from "next/link";
import Copyright from "Copyright";
import Layout from "layout";
import HomeSlider from "components/HomeSlider";

export default function Index() {
  return (
    <Layout title="title page">
      <Container>
        <Box my={4}>
          <HomeSlider />
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary" prefetch={false}>
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
