import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bgimg from "../Assets/vector5.png";

import art1 from "../Assets/1.svg";
import art2 from "../Assets/2.svg";
import art3 from "../Assets/3.svg";
import art4 from "../Assets/4.svg";
import art5 from "../Assets/5.svg";
import art6 from "../Assets/6.svg";
import art7 from "../Assets/7.svg";
import art8 from "../Assets/8.svg";
import art9 from "../Assets/9.svg";
import art10 from "../Assets/10.svg";
import art11 from "../Assets/11.svg";
import art12 from "../Assets/12.svg";
import art13 from "../Assets/13.svg";
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
    art11,
    art12,
    art13,
  ];

  return (
    <section id="TheArt">
      <Grid
        container
        item
        xs={12}
        bgcolor="#030614"
        style={{
          position: "relative",
          borderTop: "5px #030614",
          borderTopStyle: "outset",
        }}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography pt={2} sx={headingfont} className="headingStyle">
            3D Bunny Art
          </Typography>
          <Typography pt={3} pb={3} sx={stylebodytext}>
            The 3D Bunny Punks Team builds unique 3D avatars that function as
            the foundations of a flourishing community. '3D Bunny Punks' mission
            is to use high-quality NFTs in the real world and the Metaverse.
            Shortly after purchase, you'll be greeted with your unique NFT,
            allowing you to interact with your NFTs like never before. Measures
            to ensure the 4000 NFTs are up to standard and quality, challenging
            the most successful NFT projects in the space.
          </Typography>
        </Box>
        <img
          src={nftartimage}
          alt=""
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            bottom: "-10%",
            left: 0,
            zIndex: "1",
          }}
        />
        <Box width="100%" pt={2} pb={2}>
          <marquee
            style={{ width: "100%" }}
            direction="left"
            behavior="alternate"
          >
            <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
              {row1.map((elem) => (
                <img style={{ borderRadius: "10%" }} src={elem} alt="NFT" />
              ))}
            </Box>
          </marquee>
          <marquee
            style={{ width: "100%" }}
            direction="right"
            behavior="alternate"
          >
            <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
              {row1.map((elem) => (
                <img style={{ borderRadius: "10%" }} src={elem} alt="NFT" />
              ))}
            </Box>
          </marquee>

          <marquee
            style={{ width: "100%" }}
            direction="left"
            behavior="alternate"
          >
            <Box width="100%" pb={2} display="flex" gap={2} flexWrap="nowrap">
              {row1.map((elem) => (
                <img style={{ borderRadius: "10%" }} src={elem} alt="NFT" />
              ))}
            </Box>
          </marquee>
        </Box>
      </Grid>
    </section>
  );
};

export default TheArt;
