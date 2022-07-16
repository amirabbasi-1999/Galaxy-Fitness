import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";
import Logo from "../assets/images/Logo-1.png";

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: "200px", md: "150px", sm: "100px", xs: "50px" },
      ml: { sm: "50px" },
    }}
    position="relative"
    p="20px"
  >
    <Typography
      fontWeight="600"
      sx={{ fontSize: { md: "26px", sm: "22px", xs: "14px" } }}
    >
      تناسب اندام کهکشانی
    </Typography>
    <Typography
      color="#ff2625"
      fontWeight="600"
      sx={{ fontSize: { md: "26px", sm: "22px", xs: "14px" } }}
    >
      Galaxy Fitness
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { md: "40px", sm: "30px", xs: "20px" } }}
      mt="70px"
    >
      عرق کن
    </Typography>
    <Typography
      color="#ff2625"
      fontWeight={700}
      sx={{ fontSize: { md: "40px", sm: "30px", xs: "20px" } }}
    >
      لبخند بزن
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { md: "40px", sm: "30px", xs: "20px" } }}
    >
      تکرار کن
    </Typography>
    <Typography
      color="#FF2625"
      fontWeight="600"
      sx={{ fontSize: { md: "24px", sm: "18px", xs: "12px" } }}
      mt="70px"
    >
      * Use vpn *
    </Typography>
    <Stack
      sx={{
        width: { md: "150px", sm: "110px", xs: "70px" },
        fontSize: { md: "20px", sm: "15px", xs: "10px" },
      }}
    >
      <a
        href="#exercises"
        style={{
          marginTop: "20px",
          textDecoration: "none",
          textAlign: "center",
          background: "#FF2625",
          padding: "10px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        کلیک
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        fontSize: { md: "130px", sm: "100px", xs: "70px" },
      }}
    >
      Fitness
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
