import { Instagram, Twitter } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import instagramfill from "../Assets/instagram-fill.svg";
import twitterlogo from "../Assets/twitter-logo.svg";
import discord from "../Assets/discord-white.svg";
import Link from "@mui/material/Link";
const stylebodytext = {
  fontFamily: "Poppins",
  fontStyle: "normal",

  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "17px",
    xs: "10px",

    md: "15px",
    lg: "15px",
  },
  lineHeight: "140%",
  color: "white",
};

const Footer = () => {
  return (
    <Grid
      container
      item
      xs={12}
      bgcolor="#B80FBA"
      display="flex"
      sx={{ flexWrap: "wrap", height: { xs: "100%", sm: "77px" } }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: "100%", sm: "40%" } }}
      >
        <Typography sx={stylebodytext}>
          {" "}
          3D BUNNY PUNKS ©. All rights reserved
        </Typography>
      </Box>
      <Box
        gap={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: { xs: "100%", sm: "60%", flexWrap: "wrap" } }}
      >
        <Link
          href="https://discord.gg/3dbunnypunks"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            textDecoration: "none",

            fontFamily: "Nandia",
            fontStyle: "normal",
            fontWeight: 100,
            flex: "none",
            order: 0,
            flexGrow: 0,
            fontSize: {
              xl: "24px",
              xs: "12px",
              sm: "16px",
              md: "20px",
              lg: "24px",
            },

            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          <img className="iconsize" src={discord}></img>
        </Link>

        <Link
          href="https://twitter.com/3dbunnypunksnft"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            textDecoration: "none",

            fontFamily: "Nandia",
            fontStyle: "normal",
            fontWeight: 100,
            flex: "none",
            order: 0,
            flexGrow: 0,
            fontSize: {
              xl: "24px",
              xs: "12px",
              sm: "16px",
              md: "20px",
              lg: "24px",
            },

            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          <img className="iconsize" src={twitterlogo}></img>
        </Link>
        <Link
          href="https://www.instagram.com/3dbunnypunks_nft/"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            textDecoration: "none",

            fontFamily: "Nandia",
            fontStyle: "normal",
            fontWeight: 100,
            flex: "none",
            order: 0,
            flexGrow: 0,
            fontSize: {
              xl: "24px",
              xs: "12px",
              sm: "16px",
              md: "20px",
              lg: "24px",
            },

            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          <img className="iconsize" src={instagramfill}></img>
        </Link>

        <Typography sx={stylebodytext}> Terms of Services</Typography>
        <Typography sx={stylebodytext}> Privacy Policy</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
