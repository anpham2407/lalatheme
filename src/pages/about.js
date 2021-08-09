import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "ProTip";
import Link from "Link";
import Copyright from "Copyright";
import Layout from "layout";

export default function About() {
  return (
    <Layout title="sssss">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/"
          >
            Go to the main page
          </Button>
          <Button variant="contained" color="primary">
            ádasd
          </Button>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
