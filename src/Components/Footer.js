import { Instagram, Twitter } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import discord_logo from "../Assets/discord-logo.png";
import twitter from "../Assets/twitter.png";
import Vector from "../Assets/Vector.png";

const stylebodytext = {
  fontFamily: "Poppins",
  fontStyle: "normal",

  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "17px",
    xs: "15px",

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
        sx={{ width: { xs: "100%", sm: "50%" } }}
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
        sx={{ width: { sx: "100%", sm: "50%", flexWrap: "wrap" } }}
      >
        <Box
          gap={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "50%" },
          }}
        >
          <Twitter sx={{ width: "50px", height: "50px", color: "white" }} />
          <Instagram sx={{ width: "50px", height: "50px", color: "white" }} />
          <Twitter sx={{ width: "50px", height: "50px", color: "white" }} />
        </Box>

        <Typography sx={stylebodytext}> Terms of Services</Typography>
        <Typography sx={stylebodytext}> Privacy Policy</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
