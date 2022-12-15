import { Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SickIcon from "@mui/icons-material/Sick";

import joincommunity from "../Assets/joincommunity.png";
import vector5 from "../Assets/vector5.png";

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
    padding: { sm: "5px 30px 5px 30px", xs: "2px 15px 2px 15px" },
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

    borderRadius: "50px",
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
    padding: { sm: "5px 30px 5px 30px", xs: "2px 15px 2px 15px" },
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

    borderRadius: "50px",
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
    padding: { sm: "5px 30px 5px 30px", xs: "2px 15px 2px 15px" },
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

    borderRadius: "50px",
    "&.MuiButton-contained": {
      color: "white",
      borderColor: "white",
      background: "#BD00FF",
    },
  };

  return (
    <Grid
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
        <Box display="flex" width="90%" gap={2} justifyContent="center">
          <Button
            color="primary"
            startIcon={<SickIcon />}
            sx={btnstyle2}
            variant="contained"
          >
            Discord
          </Button>
          <Button startIcon={<Twitter />} sx={btnstyle} variant="contained">
            Twitter
          </Button>
          <Button
            color="secondary"
            startIcon={<Instagram />}
            sx={btnstyle1}
            variant="contained"
          >
            Instagram
          </Button>
        </Box>
      </Box>
      <Box
        width="100%"
        position="absolute"
        mb={-5}
        bottom="0"
        height="100px"
        zIndex={1}
        sx={{
          backgroundImage: `url(${vector5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </Grid>
  );
};

export default JoinTheComunity;
