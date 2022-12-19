import { Instagram, Twitter } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import discord_logo from "../Assets/discord-logo.png";
import twitter from "../Assets/twitter.png";
import Vector from "../Assets/Vector.png";
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
        justifyContent="space-around"
        sx={{ width: { xs: "100%", sm: "60%", flexWrap: "wrap" } }}
      >
        <Box
          gap={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "45%" },
            mt: { xs: "5px", sm: "0px" },
            mb: { xs: "-5px", sm: "0px" },
          }}
        >
          <Link
            href="https://discord.com/invite/ZMwKVNQEPe"
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
            <img style={{ width: "30px", height: "30px" }} src={discord}></img>
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
            <Twitter sx={{ width: "30px", height: "30px", color: "white" }} />
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
            <Instagram sx={{ width: "30px", height: "30px", color: "white" }} />
          </Link>
        </Box>
        <Box
          gap={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "45%" },
          }}
        >
          <Typography sx={stylebodytext}> Terms of Services</Typography>
          <Typography sx={stylebodytext}> Privacy Policy</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
