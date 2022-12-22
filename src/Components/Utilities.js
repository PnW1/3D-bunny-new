import { Box, Grid, Typography } from "@mui/material";

import React from "react";
import BunnyTabs from "./BunnyTabs";

const stylebodytext = {
  width: "55%",
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

  flex: "none",
  order: 0,
  flexGrow: 0,
};

const boxfont = {
  textAlign: "center",
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "24px",
    xs: "14px",
    sm: "15px",
    md: "16px",
    lg: "24px",
  },
  lineHeight: "40px",
  textTransform: "uppercase",
};
const boxfontblack = {
  textAlign: "center",
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,

  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "20px",
    xs: "12px",
    sm: "12px",
    md: "14px",
    lg: "18px",
  },
  lineHeight: "40px",
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
    xl: "80px",
    xs: "25px",
    sm: "35px",
    md: "40px",
    lg: "50px",
  },
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
  variant: "h1",
};
const headingfont2 = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "50px",
    xs: "20px",
    sm: "30px",
    md: "40px",
    lg: "45px",
  },
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
  variant: "h2",
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

const Utilities = () => {
  return (
    <Grid
      id="Utilities"
      container
      item
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
      pt={2}
      xs={12}
    >
      <Typography sx={headingfont}>Utilities</Typography>
      <Typography sx={stylebodytext} pt={2} pb={2}>
        We decided to do something outside the box from standard projects, so we
        came up with something unique and different in our ecosystem for
        holders. Aside from benefiting from our utilities and secondary market,
        holding a Bunny NFT gives you an automatic lifetime entry into our
        raffle pool.{" "}
      </Typography>
      <Typography sx={headingfont2} fontsi>
        {" "}
        Bunny Raffle Pool: A Lifetime Benefit
      </Typography>
      <Box
        width="80%"
        display="flex"
        pt={2}
        pb={2}
        gap={2}
        justifyContent="center"
        sx={{ flexWrap: { xs: "wrap", lg: "nowrap" } }}
      >
        <Box
          height="306px"
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          sx={{
            width: { xs: "100%", sm: "590px", md: "643px" },
            background: "#00B8FF",
            border: "4px solid #04A7E6",
            boxShadow: "0px 0px 20px #00B8FF",
            borderRadius: "20px",
          }}
        >
          <Typography sx={boxfont} color="white">
            15% of every sale in the secondary marketplace goes into the pool
            won by 50 holders every Sunday.{" "}
          </Typography>
          <Typography sx={boxfontblack} color="black">
            [A constant supply of funds to the pool & an endless distribution
            process for the holders]
          </Typography>
        </Box>

        <Box
          p={2}
          height="306px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          sx={{
            width: { xs: "100%", sm: "590px", md: "643px" },
            background: "#BD00FF",
            border: "4px solid #B80FBA",
            boxShadow: "0px 0px 20px #BD00FF",
            borderRadius: "20px",
          }}
        >
          <Typography sx={boxfont} color="white">
            15% of MINT INCOME goes into the Raffle Pool initially.
          </Typography>
          <Typography sx={boxfontblack} color="black">
            [As soon as we sell out, we will deposit 15% into the Raffle Pool]
          </Typography>
        </Box>
      </Box>
      <Typography
        style={{ fontStyle: "italic" }}
        sx={boxfont}
        color="white"
        width="50%"
        pt={5}
        pb={5}
        mb={5}
      >
        "By holding more Bunnies, you increase your chances of winning. If you
        decide to sell your Bunny, you'll be helping to fund the pool."
      </Typography>
      <Box
        height="700px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "80%",
          background: "rgba(10, 28, 120, 0.1)",
          border: "1px solid rgba(0, 184, 255, 0.5)",
          boxShadow:
            "0px 0px 20px rgba(0, 184, 255, 0.38), inset 0px 4px 20px rgba(0, 184, 255, 0.38)",
          backdropFilter: "blur(10px)",
          /* Note: backdrop-filter has minimal browser support */

          borderRadius: "12px",
        }}
      >
        <Box width="90%" height="80%" display="flex" flexWrap="nowrap" mb={-5}>
          <BunnyTabs />
        </Box>
      </Box>
    </Grid>
  );
};

export default Utilities;
