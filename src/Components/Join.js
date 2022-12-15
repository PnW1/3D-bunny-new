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
    xs: "25px",
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
    xl: "17px",
    xs: "10px",
    sm: "10px",
    md: "13px",
    lg: "15px",
  },
  lineHeight: "140%",
  color: "white",
};

const Join = () => {
  const textfieldstyle = {
    input: { color: "white" },
    label: { color: "white" },
    [`& fieldset`]: {
      fontVariant: "outlined",
      size: "small",
      borderRadius: "20px",
      borderColor: "Background",
    },
  };

  return (
    <section id="Join">
      <Grid container item xs={12} height="100%">
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: { xs: "60vh", sm: "80vh", md: "100vh" } }}
          className="joinbackground"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="joinfirstbox">
            <Typography sx={headingfont} height="20%">
              Join the Community
            </Typography>
            <Typography sx={stylebodytext} height="80%" overflow="auto">
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
            height: { xs: "60vh", sm: "80vh", md: "100vh" },
          }}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              background:
                "linear-gradient(to right top, #00B8FF 0%, #00B8FF 50%, transparent 50%)",
            }}
          >
            <Box className="joinfirstbox">
              <Box
                width="100%"
                gap={2}
                display="flex"
                justifyContent="space-between"
              >
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{ color: "white" }} position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Please enter text"
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
                  placeholder="Please enter text"
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
                placeholder="Please enter text"
                sx={textfieldstyle}
              />

              <TextField
                multiline
                minRows={4}
                fullWidth
                placeholder="Please enter text"
                sx={textfieldstyle}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  alignSelf: "start",
                  width: "40%",
                  borderRadius: "50px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Join;
