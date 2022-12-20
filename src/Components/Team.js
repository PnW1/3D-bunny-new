import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import profileimage from "../Assets/1.png";

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
    sm: "35px",
    md: "40px",
    lg: "70px",
  },
  lineHeight: "92px",
  color: "#ffffff",
  textTransform: "uppercase",
};

const teamheadingfont = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xs: "21px",
    md: "24px",
  },
  lineHeight: "36px",
  color: "#ffffff",
  textAlign: "center",
  textTransform: "uppercase",

  alignSelf: "stretch",

  /* Inside auto layout */
};
const teambodyfont = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xs: "15px",
    md: "18",
  },
  lineHeight: "38px",
  color: "#ffffff",
  textAlign: "center",
  textTransform: "uppercase",

  /* Inside auto layout */
};

const stylebodytext = {
  width: { xs: "80%", sm: "70%", md: "60%" },
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

const Team = () => {
  return (
    <Grid
      id="Team"
      container
      item
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      pt={2}
      pb={2}
      sx={{
        backgroundColor: "#030526",

        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
      xs={12}
    >
      <Typography sx={headingfont} variant="h1" textAlign="center">
        Team
      </Typography>
      <Typography
        className="bodytextstyle"
        textAlign="center"
        pt={2}
        sx={stylebodytext}
        pb={2}
      >
        Sara DF forms 3D BUNNY PUNKS to create an NFT collection that
        continuously delivers value to holders. The Design team are 3D experts
        whose goal is to create flawless visualisations with meticulous
        attention to detail, having worked in close partnership with companies
        like Microsoft and Samsung. Marketing specialists who create exceptional
        bespoke advertising campaigns and unique solutions for engaging the
        audience with our bunnies, having the privilege of working with several
        business elites. Developers with a broad knowledge of blockchain
        technology and a deep understanding of Defi systems assist the project
        in reaching its full potential.
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        mt={5}
        mb={5}
        sx={{ width: { xs: "100%", xl: "80%" }, gap: { xs: 2, xl: 6 } }}
      >
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Sara
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Founder
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Wahab
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Senior Developer/Programmer
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Sparrow
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Project Manager/Marketing
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Ray
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Comunity Manager/Marketing
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            ChicMic
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            3D Art Studio
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={profileimage} className="teamimage1" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Gabriel
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Comic Artist/Illustrator
          </Typography>
        </Box>

        {/* <Box
          sx={{
            width: "399.35px",
            height: "443.77px",

            background:
              "linear-gradient(180deg, rgba(189, 0, 255, 0.48) 0%, rgba(0, 184, 255, 0.38) 100%)",
            backdropFilter: " blur(15.1845px)",
          

            borderRadius: "24.2953px",
          }}
        ></Box> */}
      </Box>
    </Grid>
  );
};

export default Team;
