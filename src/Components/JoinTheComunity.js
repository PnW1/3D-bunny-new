import { Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SickIcon from "@mui/icons-material/Sick";
import Link from "@mui/material/Link";
import joincommunity from "../Assets/joincommunity.png";
import vector5 from "../Assets/vector5.png";
import discord from "../Assets/discord-white.svg";
import twitter from "../Assets/twitter-logo.svg";
import instagram from "../Assets/instagram-fill.svg";

const JoinTheComunity = () => {
  const bodyfont = {
    fontFamily: "Mondia",
    fontStyle: "normal",
    fontWeight: 100,
    flex: "none",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xl: "70px",
      xs: "25px",
      sm: "35",
      md: "40px",
      lg: "50px",
    },
    lineHeight: "103px",
    color: "#ffffff",
  };

  const headingfont = {
    fontFamily: "Nandia",
    fontStyle: "normal",
    fontWeight: 400,
    flex: "none",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xs: "25px",
      sm: "35px",
      md: "50px",
      lg: "60px",
      xl: "80px",
    },
    lineHeight: "90px",
    color: "#ffffff",
    textTransform: "uppercase",
  };

  const btnstyle = {
    fontFamily: "Mondia",
    fontStyle: "normal",
    fontWeight: 100,
    lineHeight: "35px",
    padding: {
      xl: "12px 32px 12px 32px",
      xs: "0px 10px 0px 10px",
      sm: "0px 30px 0px 30px",
      md: "5px 30px 5px 30px",
      lg: "8px 30px 8px 30px",
    },
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

    borderRadius: { xs: "30px", sm: "50px" },
    "&.MuiButton-contained": {
      color: "white",
      borderColor: "white",
      background: "#00B8FF",
    },
  };
  const btnstyle2 = {
    fontFamily: "Mondia",
    fontStyle: "normal",
    fontWeight: 100,
    lineHeight: "35px",
    padding: {
      xl: "12px 32px 12px 32px",
      xs: "0px 10px 0px 10px",
      sm: "5px 30px 5px 30px",
      md: "5px 30px 5px 30px",
      lg: "8px 30px 8px 30px",
    },
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

    borderRadius: { xs: "30px", sm: "50px" },
    "&.MuiButton-contained": {
      color: "white",
      borderColor: "white",
      background: "#221669",
    },
  };
  const btnstyle1 = {
    fontFamily: "Mondia",
    fontStyle: "normal",
    fontWeight: 100,
    lineHeight: "35px",
    padding: {
      xl: "12px 32px 12px 32px",
      xs: "0px 10px 0px 10px",
      sm: "5px 30px 5px 30px",
      md: "5px 30px 5px 30px",
      lg: "8px 30px 8px 30px",
    },
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

    borderRadius: { xs: "30px", sm: "50px" },
    "&.MuiButton-contained": {
      color: "white",
      borderColor: "white",
      background: "#BD00FF",
    },
  };

  return (
    <Grid
      id="joinus"
      container
      item
      height="763px"
      sx={{
        backgroundImage: `url(${joincommunity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ position: "relative" }}
    >
      <Box
        width="100%"
        height="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h1" sx={headingfont}>
          Join the Community
        </Typography>
        <Box
          display="flex"
          width="90%"
          gap={2}
          sx={{ mt: { xs: 1, md: 3, xl: 5 } }}
          justifyContent="center"
        >
          <Button
            color="primary"
            startIcon={<img className="discordimage" src={discord}></img>}
            sx={btnstyle2}
            variant="contained"
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
                  xs: "8px",
                  sm: "16px",
                  md: "20px",
                  lg: "24px",
                },

                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Discord
            </Link>
          </Button>
          <Button
            startIcon={<img className="discordimage" src={twitter}></img>}
            fontSize="large"
            sx={btnstyle}
            variant="contained"
          >
            {" "}
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
                  xs: "8px",
                  sm: "16px",
                  md: "20px",
                  lg: "24px",
                },

                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Twitter
            </Link>
          </Button>
          <Button
            color="secondary"
            startIcon={<img className="discordimage" src={instagram}></img>}
            sx={btnstyle1}
            variant="contained"
          >
            {" "}
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
                  xs: "8px",
                  sm: "16px",
                  md: "20px",
                  lg: "24px",
                },

                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Instagram
            </Link>
          </Button>
        </Box>
      </Box>
      <Box
        width="100%"
        position="absolute"
        bottom="0"
        height="200px"
        zIndex={1}
        sx={{
          backgroundImage: `url(${vector5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: { xs: -5, xl: -3 },
        }}
      ></Box>
    </Grid>
  );
};

export default JoinTheComunity;
