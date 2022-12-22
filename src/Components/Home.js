import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import homecircle from "../Assets/homecircle.png";
import ScrolltoDown from "../Assets/ScrolltoDown.png";
import elem from "../Assets/Animated Element.png";
import scrollbox from "../Assets/scrollbox.gif";
import scrolldown from "../Assets/scrolldown.gif";
import { HashLink } from "react-router-hash-link";

import grass from "../Assets/HeaderGrass.png";

const Home = () => {
  const bodyfont = {
    fontFamily: "Mondia",
    fontStyle: "normal",
    fontWeight: 100,
    flex: "none",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xl: "60px",
      xs: "25px",
      sm: "35",
      md: "40px",
      lg: "50px",
    },
    lineHeight: { xs: "50px", md: "103px" },
    color: "#ffffff",
    textTransform: "uppercase",
  };

  const headingfont = {
    fontFamily: "Nandia",
    fontStyle: "normal",
    fontWeight: 400,
    flex: "none",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xl: "100px",
      xs: "25px",
      sm: "35",
      md: "40px",
      lg: "50px",
    },
    lineHeight: { xs: "50px", md: "92px" },
    color: "#ffffff",
    textTransform: "uppercase",
  };

  const btnstyle = {
    fontFamily: "Poppins",
    fontStyle: "normal",

    padding: {
      xl: "16px 32px 16px 32px",
      xs: "5px 30px 5px 30px",
      sm: "5px 30px 5px 30px",
      md: "5px 30px 5px 30px",
      lg: "8px 30px 8px 30px",
    },

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

    borderRadius: "50px",
    "&.MuiButton-outlined": {
      color: "white",
      borderColor: "white",
    },
  };

  return (
    <Grid
      container
      item
      className="animated-background"
      display="flex"
      justifyContent="center"
      alignItems="center"
      xs={12}
      position="relative"
      sx={{
        height: { xs: "100vh", sm: "110vh", md: "110vh" },
      }}
    >
      <Box
        width="100%"
        height="45%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={10}
        sx={{ gap: { xl: 2, xs: "0px" } }}
      >
        <img src={homecircle} alt="" style={{ paddingTop: "50px" }} />
        <Typography variant="h2" sx={bodyfont}>
          Welcome to
        </Typography>
        <Typography variant="h1" sx={headingfont}>
          3D Bunny Punks
        </Typography>
        <Button variant="outlined" sx={btnstyle}>
          Welcome to the Bunny Hole
        </Button>
      </Box>
      <HashLink
        to="/#joinus"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box sx={{ width: "45px", height: "55px" }} position="relative">
          <img
            style={{ width: "100%", height: "100%" }}
            src={scrollbox}
            alt=""
          />

          <img
            style={{
              position: "absolute",
              top: "100%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
            }}
            src={scrolldown}
            alt=""
          ></img>
        </Box>
      </HashLink>
      <Box
        width="100%"
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={-5}
        bottom="0"
        height="200px"
        sx={{
          backgroundImage: `url(${grass})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: { xs: "-40px", xl: "-0px" },
        }}
      ></Box>
    </Grid>
  );
};

export default Home;
