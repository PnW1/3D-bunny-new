import { Box, Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import roadmapbg from "../Assets/roadmapbg.png";
import Divider from "@mui/material/Divider";
const PhaseStyle = {
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  width: { xs: "40%", sm: "35%", lg: "25%" },
  fontSize: {
    xs: "20px",
    sm: "30px",
    md: "35px",
    lg: "40px",
    xl: "50px",
  },
  lineHeight: "46px",
  color: "#ffffff",
  textTransform: "uppercase",
};

const boxstyle = {
  borderRadius: "12px",
  display: "flex",
  border: "1px solid #64108E",
  alignItems: "center",
  flexDirection: "column",
  background:
    "linear-gradient(180deg, rgba(214, 0, 255, 0.0572) 0%, rgba(0, 184, 255, 0.0572) 100%)",

  boxSizing: "border-box",
};

const boxstyle1 = {
  borderRadius: "12px",
  display: "flex",
  border: "1px solid #64108E",
  alignItems: "center",
  flexDirection: "column",
  background:
    "linear-gradient(180deg, rgba(214, 0, 255, 0.0572) 0%, rgba(0, 184, 255, 0.0572) 100%)",

  boxSizing: "border-box",
};

const styleheadingtext = {
  width: "80%",
  textAlign: "center",
  fontFamily: "Nandia",
  fontStyle: "normal",
  fontWeight: 400,
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontSize: {
    xs: "14px",
    sm: "14px",
    md: "16pxpx",
    lg: "20px",
    xl: "24px",
  },

  lineHeight: "36px",
  color: "#ffffff",

  pt: 5,
  pb: 5,
};

const stylebodytext = {
  width: "85%",
  textAlign: "justify",
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

const RoadMap = () => {
  const [viewmore, setviewmore] = useState(false);
  const [viewless, setviewless] = useState(false);

  const headingfont = {
    fontFamily: "Nandia",
    fontStyle: "normal",
    fontWeight: 400,
    flex: "none",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xs: "40px",
      sm: "50",
      md: "60px",
      lg: "70px",
      xl: "80px",
    },
    lineHeight: "92px",
    color: "#ffffff",
    textTransform: "uppercase",
  };

  return (
    <Grid
      id="Roadmap"
      container
      item
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundImage: `url(${roadmapbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 2,
      }}
      pb={2}
    >
      <Typography textAlign="center" variant="h1" pt={15} sx={headingfont}>
        RoadMAp
      </Typography>

      <Box
        sx={{ width: { xs: "90%", xl: "80%" } }}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Typography width="50%">
            <Divider style={{ background: "#64108E" }} />
          </Typography>

          <Typography textAlign="end" sx={PhaseStyle}>
            Phase I
          </Typography>
        </Box>

        <Box
          display="flex"
          width="100%"
          flexWrap="wrap"
          justifyContent="space-around"
          sx={{ gap: { xs: 2, xl: 5 } }}
        >
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "0px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "330px",
              },
              height: { xs: "350px", sm: "422px" },
              border: "1px solid #64108E",
            }}
            style={boxstyle}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Art is Everything
            </Typography>
            <Typography variant="body2" sx={stylebodytext}>
              Measures have been taken to ensure the quality of all 5555 NFTs is
              up to standard, challenging the most successful NFT projects in
              the space.
            </Typography>
          </Box>
          <Box
            overflow="hidden"
            sx={{
              marginTop: { xs: "20px", sm: "20px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "330px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Building Community
            </Typography>
            <Typography sx={stylebodytext}>
              To pursue every goal,we will first take our time to build a solid
              community. Then, to ensure that the Community can claim actual
              ownership of we aim to create Community Voting on all significant
              decisions. As soon as the sale is over, we will set up a voting
              platform{" "}
              <span>
                {" "}
                {viewmore ? (
                  <>
                    <span>
                      {" "}
                      that will enable our holders to vote and give the project
                      a direction led by the Community.{" "}
                    </span>
                    <Button
                      color="primary"
                      onClick={() => setviewmore(!viewmore)}
                    >
                      view less
                    </Button>
                  </>
                ) : (
                  <Button
                    color="primary"
                    onClick={() => setviewmore(!viewmore)}
                  >
                    ...view more
                  </Button>
                )}
              </span>{" "}
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "100px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "330px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              3D Bunny Punks Minting
            </Typography>
            <Typography sx={stylebodytext}>
              The distribution will begin with our highly anticipated OG mint;
              after that will be another VIP selling stage. After Whitelist
              sells, 3D bunny punks will be unveiled in full glory. 3DBP NFTs
              will be available for secondary transactions.
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "150px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "330px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Raffles, Giveaways, and Fun Initiatives
            </Typography>
            <Typography sx={stylebodytext}>
              The team believes in giving back to the Community, so Raffles,
              Giveaways and fun Initiatives will be held for holders. Rewards
              might range from free NFTs to crypto and more. Also, holders can
              access our merchandise and bunny defender -comic book.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "90%", xl: "80%" } }}
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mt={4}
        >
          <Typography width="15%" sx={PhaseStyle}>
            Phase II
          </Typography>
          <Typography width="50%">
            <Divider style={{ background: "#64108E" }} />
          </Typography>
        </Box>

        <Box
          display="flex"
          width="100%"
          sx={{ gap: { xs: 2, xl: 5 } }}
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "150px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Helping Rabbit Rescue Centres, Orphanages, Care-homes and Planting
              Trees
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              We'll be giving back to the world, and we'll help people in need.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "100px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              $BUNNY Token and STAKING
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              $BUNNY is a utility token with a unique buyback-and-burn mechanism
              and multiple utilities related to the 3D Bunny Punks NFT
              collection. It will be available when 70% of the collection is
              Sold Out.
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "50px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Bunny Defender: The Comic
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              We introduce Defender and the story behind the future game.
            </Typography>
          </Box>{" "}
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "90%", xl: "80%" } }}
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mt={4}
        >
          <Typography width="50%">
            <Divider style={{ background: "#64108E" }} />
          </Typography>
          <Typography textAlign="end" sx={PhaseStyle}>
            Phase III
          </Typography>
        </Box>
        <Box
          display="flex"
          width="100%"
          gap={2}
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "0px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Ready for the Metaverse
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              After 80% of selling out, we plan to buy land in the Metaverse to
              build our digital member space so only holders can access it.
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "50px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              Bunny Defender: The Game
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              Powered By- Unreal Engine 5 After 90% of the sales, we will build
              a highly expected Play to Earn game powered by Unreal Engine 5. It
              will be playable by mid- 2023. Welcome to Cyberpunk City!
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "100px" },
              width: {
                xs: "300px",
                sm: "45%%",
                md: "30%",
                lg: "22%",
                xl: "400px",
              },
              height: { xs: "350px", sm: "422px" },
            }}
            style={boxstyle1}
          >
            <Typography sx={styleheadingtext} className="headingStyle">
              3D Bunny Punks Experience
            </Typography>
            <Typography sx={stylebodytext} className="bodytextstyle">
              When the collection sells out, a select number of 3D Bunny Punks
              community members will meet for gatherings and summits, combining
              real-life experiences with digital ownership.
            </Typography>
          </Box>{" "}
        </Box>
      </Box>
    </Grid>
  );
};

export default RoadMap;
