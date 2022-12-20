import { AccountCircle, Email, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import firstimage from "../Assets/joinfirst.png";

const headingfont = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "52px",
    xs: "20px",
    sm: "35px",
    md: "40px",
    lg: "40px",
  },
  lineHeight: "90px",
  color: "#ffffff",
  textTransform: "uppercase",
};
const stylebodytext = {
  fontFamily: "Poppins",
  fontStyle: "normal",

  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xl: "18px",
    xs: "10px",
    sm: "10px",
    md: "13px",
    lg: "15px",
  },
  lineHeight: "170%",
  color: "white",
  textAlign: "center",
  alignSelf: "stretch",
};

const Join = () => {
  const textfieldstyle = {
    input: { color: "white" },
    label: { color: "white" },
    [`& fieldset`]: {
      fontVariant: "outlined",
      size: "small",
      borderRadius: "50px",
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "white",
      },
    },
  };

  const textareastyle = {
    input: { color: "white" },
    label: { color: "white" },
    [`& fieldset`]: {
      fontVariant: "outlined",
      size: "small",
      borderRadius: "30px",
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "white",
      },
    },
  };

  return (
    <Grid id="Join" container item xs={12} height="100%">
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "100vh" }}
        className="joinbackground"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="joinfirstbox" gap={2}>
          <Typography sx={headingfont}>Join the Community</Typography>
          <Typography sx={stylebodytext} overflow="auto">
            Now that you have been informed on what the 3D Bunny Punks is all
            about, the only thing left to do for you is to become an active
            member of the 3D Bunny Punks Community - on Discord, Twitter and
            Instagram - and purchase your exclusive NFT. Good luck to you all!
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#00072C",
          height: "100vh",
        }}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            background:
              "linear-gradient(to right top, #00B8FF 0%, #00B8FF 50%, transparent 50%)",
          }}
          gap={4}
        >
          <Typography
            className="headingStyle"
            textAlign="center"
            sx={{
              fontSize: { xs: "1.5em", md: "2em", xl: "3em" },
              width: { xs: "90%", sm: "80%" },
            }}
          >
            Want to Ask Something?
          </Typography>
          <Typography width="80%" textAlign="center" color="white">
            Feel free to submit your Query .
          </Typography>
          <Box className="joinfirstbox" gap={3}>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              sx={{
                gap: { xs: 2, sm: "0px" },
                mt: { xs: 2, sm: "0px" },
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: "white" }} position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                placeholder="Please enter Name"
                sx={textfieldstyle}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: "white" }} position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                placeholder="Please enter Email"
                sx={textfieldstyle}
              />
            </Box>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{ color: "white" }} position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              placeholder="Please enter Phone"
              sx={textfieldstyle}
            />

            <TextField
              multiline
              minRows={4}
              fullWidth
              placeholder="Please enter text"
              sx={textareastyle}
            />
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins",

                width: "40%",
                fontSize: { xs: "7px", lg: "15px" },

                borderRadius: "50px",
                "&.MuiButton-contained": {
                  height: "40px",

                  alignSelf: "start",
                  background: "black",
                },
                padding: {
                  xl: "12px 32px 12px 32px",
                  xs: "2px 10px 2px 10px",
                  sm: "5px 30px 5px 30px",
                  md: "5px 30px 5px 30px",
                  lg: "8px 30px 8px 30px",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Join;
