import { Download } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgimg from "../Assets/image2.png";

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
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
};

const stylebodytext = {
  width: "50%",
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
  "&.MuiButton-contained": {
    color: "white",
    borderColor: "white",
    background: "#BD00FF",
    padding: "10px",
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
        backgroundColor: "#030526",

        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ width: { xs: "100%", sm: "60%" } }}
        alignItems="center"
        justifyContent="space-between"
        height="200px"
        gap={2}
        display="flex"
        flexDirection="column"
      >
        <Typography sx={headingfont}>WHITEPAPER</Typography>
        <Typography sx={stylebodytext}>
          We decided to do something outside the box from standard projects, so
          we came up with something unique and different in our ecosystem for
          holders.{" "}
        </Typography>
        <Box width="50%" display="flex" justifyContent="flex-end">
          {" "}
          <Button sx={btnstyle} variant="contained" startIcon={<Download />}>
            Download
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default WhitePaper;
