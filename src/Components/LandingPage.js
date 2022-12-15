import { Grid } from "@mui/material";
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

const LandingPage = () => {
  return (
    <Grid
      container
      disableGutters="true"
      sx={{
        backgroundColor: "#030526",

        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
    >
      <Header />
      <Home />
      <JoinTheComunity />

      <TheArt />
      <RoadMap />
      <Utilities />

      <WhitePaper />
      <Team />
      <Faq />
      <Join />
      <Footer />
    </Grid>
  );
};

export default LandingPage;
