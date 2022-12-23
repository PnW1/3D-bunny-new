import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import team_image1 from "../Assets/team_asset/team_image1.png";
import inner_hover from "../Assets/team_asset/inner_hover.png";
import outer_hover from "../Assets/team_asset/outer_hover.png";
import outer_normal from "../Assets/team_asset/outer_normal.png";
import inner_normal from "../Assets/team_asset/outer_normal.png";

const Teamtest = () => {
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

  return (
    <Grid xs={12} display="flex" mt={20} mb={10} justifyContent="space-around">
      <Box className="team_box_style_outerbox">
        <Box className="team_box_hover">
          <Box className="image_setter">
            <img src={team_image1} className="team_image_hover_style" />
            <img src={inner_hover} className="team_inner_hover_style" />
            <img src={outer_hover} className="team_outer_hover_style" />
          </Box>
          <Typography pt={5} sx={teamheadingfont}>
            helo
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            sara
          </Typography>
        </Box>

        <Box className="team_box_normal">
          <Box className="image_setter_normal">
            <img src={team_image1} className="team_image_normal_style" />
            <img src={inner_normal} className="team_inner_normal_style" />
            <img src={outer_normal} className="team_outer_normal_style" />
          </Box>
          <Typography pt={5} sx={teamheadingfont}>
            helo
          </Typography>
          <Typography pt={1} sx={teambodyfont}>
            sara
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Teamtest;
