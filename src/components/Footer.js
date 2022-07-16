import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Stack>
      <a
        href="https://linktr.ee/amirabbasi"
        style={{
          margin: "30px auto 45px",
          textDecoration: "none",
          width: "150px",
          textAlign: "center",
          background: "#555",
          padding: "14px",
          fontSize: "16px",
          textTransform: "none",
          color: "white",
          borderRadius: "50px",
        }}
      >
        ارتباط با من
      </a>
    </Stack>
  </Box>
);

export default Footer;
