import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        padding: "20px 10px",
        textAlign: "center",
        marginTop: "auto",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary" sx={{ mb: { xs: 1, sm: 0 } }}>
        <h1>© 2024 Kelola.Biz</h1>. Apriyana Prasetio Putra.
      </Typography>
      
    </Box>
  );
};

export default Footer;
