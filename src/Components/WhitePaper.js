import { Download } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgimg from "../Assets/image2.png";
import downloadicon from "../Assets/Icon.svg";

import pdffile from "../Assets/3D Bunny Punks WhitePaper.pdf";

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
    sm: "35",
    md: "40px",
    lg: "50px",
  },
  textAlign: "right",
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
};

const stylebodytext = {
  width: "47%",
  alignSelf: "center",
  textAlign: "right",
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

const btnstyle = {
  fontFamily: "Mondia",
  fontStyle: "normal",

  padding: {
    xl: "16px 32px 16px 32px",
    xs: "5px 30px 5px 30px",
    sm: "5px 30px 5px 30px",
    md: "5px 30px 5px 30px",
    lg: "8px 30px 8px 30px",
  },

  fontWeight: 100,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "24px",
    xs: "12px",
    sm: "12px",
    md: "15px",
    lg: "18px",
  },
  lineHeight: "35px",
  textTransform: "uppercase",

  borderRadius: "35px",
  "&.MuiButton-contained": {
    color: "white",
    borderColor: "white",
    background: "#BD00FF",
  },
};

const WhitePaper = () => {
  return (
    <Grid
      id="Whitepaper"
      container
      item
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      xs={12}
      height="120vh"
      sx={{
        backgroundImage: ` url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ width: { xs: "100%", sm: "60%" } }}
        alignItems="end"
        justifyContent="space-between"
        height="200px"
        gap={2}
        display="flex"
        flexDirection="column"
      >
        <Typography
          width="47%"
          alignSelf="center"
          variant="h1"
          sx={headingfont}
        >
          WHITEPAPER
        </Typography>
        <Typography sx={stylebodytext}>
          We decided to do something outside the box from standard projects, so
          we came up with something unique and different in our ecosystem for
          holders.{" "}
        </Typography>
        <Box
          width="50%"
          display="flex"
          alignSelf="center"
          justifyContent="flex-end"
        >
          {" "}
          <a
            href={pdffile}
            download
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={btnstyle}
              variant="contained"
              startIcon={
                <img className="discordimage" src={downloadicon}></img>
              }
            >
              Download
            </Button>
          </a>
        </Box>
      </Box>
    </Grid>
  );
};

export default WhitePaper;
