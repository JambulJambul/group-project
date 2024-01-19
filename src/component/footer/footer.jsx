import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F2F1EB",
        py: 7,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="text.secondary">
          © {new Date().getFullYear()} Copyright
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
