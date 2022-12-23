import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import profileimage from "../Assets/1.png";
import img1s from "../Assets/innerimage.png";
import img1l from "../Assets/outerimage.png";
import team_image1 from "../Assets/team_asset/team_image1.png";
import team_image2 from "../Assets/team_asset/team_image2.png";
import team_image3 from "../Assets/team_asset/team_image3.png";
import team_image4 from "../Assets/team_asset/team_image4.png";
import team_image5 from "../Assets/team_asset/team_image5.png";
import team_image6 from "../Assets/team_asset/team_image6.png";

import inner_hover from "../Assets/team_asset/inner_hover.png";
import outer_hover from "../Assets/team_asset/outer_hover.png";
import outer_normal from "../Assets/team_asset/outer_normal.png";
import inner_normal from "../Assets/team_asset/outer_normal.png";

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
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image1} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              SARA
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              FOUNDER
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image1} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              SARA
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              FOUNDER
            </Typography>
          </Box>
        </Box>{" "}
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image2} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              WAHAB
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              SENIOR DEVELOPER/PROGRAMMER
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image2} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              WAHAB
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              SENIOR DEVELOPER/PROGRAMMER
            </Typography>
          </Box>
        </Box>
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image3} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              SPARROW
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              PROJECT MANAGER/MARKETING
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image3} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              SPARROW
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              PROJECT MANAGER/MARKETING
            </Typography>
          </Box>
        </Box>{" "}
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image4} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              RAY
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              COMUNITY MANAGER/MARKETING
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image4} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              RAY
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              COMUNITY MANAGER/MARKETING
            </Typography>
          </Box>
        </Box>{" "}
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image5} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              CHICMIC
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              3D ART STUDIO
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image5} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              CHICMIC
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              3D ART STUDIO
            </Typography>
          </Box>
        </Box>{" "}
        <Box className="team_box_style_outerbox">
          <Box className="team_box_hover">
            <Box className="image_setter">
              <img src={team_image6} className="team_image_hover_style" />
              <img src={inner_hover} className="team_inner_hover_style" />
              <img src={outer_hover} className="team_outer_hover_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              GABRIEL
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              COMIC ARTIST/ILLUSTRATOR
            </Typography>
          </Box>

          <Box className="team_box_normal">
            <Box className="image_setter_normal">
              <img src={team_image6} className="team_image_normal_style" />
              <img src={inner_normal} className="team_inner_normal_style" />
              <img src={outer_normal} className="team_outer_normal_style" />
            </Box>
            <Typography pt={5} sx={teamheadingfont}>
              GABRIEL
            </Typography>
            <Typography pt={1} sx={teambodyfont}>
              COMIC ARTIST/ILLUSTRATOR
            </Typography>
          </Box>
        </Box>{" "}
        {/* <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Sara
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Founder
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Wahab
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Senior Developer/Programmer
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Sparrow
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Project Manager/Marketing
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Ray
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Comunity Manager/Marketing
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            ChicMic
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            3D Art Studio
          </Typography>
        </Box>
        <Box className="teamboxstyle">
          <img src={img1s} className="teamimage1" alt="" />
          <img src={img1l} id="teamimage2" alt="" />
          <Typography pt={5} sx={teamheadingfont}>
            Gabriel
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            Comic Artist/Illustrator
          </Typography>
        </Box> */}
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
