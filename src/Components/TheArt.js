import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bgimg from "../Assets/vector5.png";

import art1 from "../Assets/1.png";
import art2 from "../Assets/2.png";
import art3 from "../Assets/3.png";
import art4 from "../Assets/4.png";
import art5 from "../Assets/5.png";
import art6 from "../Assets/6.png";
import art7 from "../Assets/7.png";
import art8 from "../Assets/8.png";
import art9 from "../Assets/9.png";
import art10 from "../Assets/10.png";
import art11 from "../Assets/11.png";
import art12 from "../Assets/12.png";
import art13 from "../Assets/13.png";
import art14 from "../Assets/14.png";
import art15 from "../Assets/15.png";
import art16 from "../Assets/16.png";
import art17 from "../Assets/17.png";
import art18 from "../Assets/18.png";
import art19 from "../Assets/19.png";
import art20 from "../Assets/21.png";
import art21 from "../Assets/22.png";
import art22 from "../Assets/23.png";
import art23 from "../Assets/24.png";
import art24 from "../Assets/25.png";
import art25 from "../Assets/49.png";

import nftartimage from "../Assets/NFT-ART-IMAGE 1.svg";

const headingfont = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "80px",
    xs: "25px",
    sm: "35",
    md: "40px",
    lg: "50px",
  },
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
};
const stylebodytext = {
  width: { xs: "90%", md: "70%", lg: "50%" },
  textAlign: "center",
  fontFamily: "Poppins",
  fontStyle: "normal",

  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "17px",
    xs: "10px",
    sm: "10px",
    md: "13px",
    lg: "15px",
  },
  lineHeight: "140%",
  color: "white",
};

const TheArt = () => {
  const row1 = [
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
    art9,
    art10,
    art13,
    art14,
    art15,
    art16,
    art17,
  ];
  const row2 = [
    art11,
    art12,
    art13,
    art14,
    art15,
    art16,
    art17,
    art18,
    art19,
    art20,
    art21,
    art22,
    art23,
    art24,
    art25,
  ];
  const row3 = [
    art18,
    art19,
    art20,
    art21,
    art22,
    art23,
    art24,
    art25,
    art10,
    art13,
    art14,
    art15,
    art16,

    art16,
    art17,
  ];

  return (
    <Grid
      id="TheArt"
      container
      item
      xs={12}
      sx={{
        mb: { xl: 30, xs: 0, md: 5, lg: 10 },
        mt: { xl: -5, xs: -30, md: -20, lg: -5 },
      }}
      bgcolor="#030614"
      style={{
        position: "relative",
        borderTop: "5px #030614",
        borderTopStyle: "outset",
        zIndex: 1,
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h1"
          pt={2}
          sx={headingfont}
          className="headingStyle"
        >
          3D Bunny Art
        </Typography>
        <Typography pt={3} pb={3} sx={stylebodytext}>
          The 3D Bunny Punks Team builds unique 3D avatars that function as the
          foundations of a flourishing community. '3D Bunny Punks' mission is to
          use high-quality NFTs in the real world and the Metaverse. Shortly
          after purchase, you'll be greeted with your unique NFT, allowing you
          to interact with your NFTs like never before. Measures to ensure the
          5555 NFTs are up to standard and quality, challenging the most
          successful NFT projects in the space.
        </Typography>
      </Box>
      <Box className="artimage">
        <img
          style={{ widows: "95%", height: "95%" }}
          src={nftartimage}
          alt=""
        />
      </Box>
      <Box width="100%" pt={2} pb={2}>
        <marquee
          style={{ width: "100%" }}
          direction="left"
          behavior="alternate"
        >
          <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
            {row1.map((elem) => (
              <img
                style={{ borderRadius: "10%", width: "150px", height: "150px" }}
                src={elem}
                alt="NFT"
              />
            ))}
          </Box>
        </marquee>
        <marquee
          style={{ width: "100%" }}
          direction="right"
          behavior="alternate"
        >
          <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
            {row2.map((elem) => (
              <img
                style={{ borderRadius: "10%", width: "150px", height: "150px" }}
                src={elem}
                alt="NFT"
              />
            ))}
          </Box>
        </marquee>

        <marquee
          style={{ width: "100%" }}
          direction="left"
          behavior="alternate"
        >
          <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
            {row3.map((elem) => (
              <img
                style={{ borderRadius: "10%", width: "150px", height: "150px" }}
                src={elem}
                alt="NFT"
              />
            ))}
          </Box>
        </marquee>
      </Box>
    </Grid>
  );
};

export default TheArt;
