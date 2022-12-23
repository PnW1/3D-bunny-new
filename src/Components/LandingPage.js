import { Box, Grid } from "@mui/material";
import React from "react";
import Join from "./Join";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import JoinTheComunity from "./JoinTheComunity";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Utilities from "./Utilities";
import WhitePaper from "./WhitePaper";
import Faq from "./Faq";
import TheArt from "./TheArt";
import Teamtest from "./Teamtest";

const LandingPage = () => {
  return (
    <Grid
      container
      disableGutters="true"
      sx={{
        background:
          "radial-gradient(44.37% 124.47% at 83.36% 89.78%, #050A20 0%, #040612 100%)",
      }}
    >
      <Header />

      <Team />
      {/* <Home />
      <JoinTheComunity />
      <TheArt />

      <RoadMap />
      <Utilities />
      <WhitePaper />
      <Team />
      <Faq />
      <Join /> */}
      <Footer />
      {/*
     
    
      

   
 
     */}
    </Grid>
  );
};

export default LandingPage;
