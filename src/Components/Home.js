import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import homecircle from "../Assets/homecircle.png";
import ScrolltoDown from "../Assets/ScrolltoDown.png";

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
      xl: "70px",
      xs: "25px",
      sm: "35",
      md: "40px",
      lg: "50px",
    },
    lineHeight: { xs: "50px", md: "103px" },
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

    padding: "5px 30px 5px 30px",

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
        height: { xs: "100vh", sm: "110vh", md: "120vh" },
      }}
    >
      <Box
        width="100%"
        height="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <img src={homecircle} alt="" />
        <Typography sx={bodyfont}>Welcome to</Typography>
        <Typography variant="h1" sx={headingfont}>
          3D Bunny Punks
        </Typography>
        <Button variant="outlined" sx={btnstyle}>
          Welcome to the Bunny Hole
        </Button>
      </Box>

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
        }}
      >
        <img
          style={{ width: "24px", height: "62px" }}
          src={ScrolltoDown}
          alt=""
        />
      </Box>
    </Grid>
  );
};

export default Home;
