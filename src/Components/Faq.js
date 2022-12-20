import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Faq() {
  const [accordian1, setaccordian1] = React.useState(false);
  const [accordian2, setaccordian2] = React.useState(false);
  const [accordian3, setaccordian3] = React.useState(false);
  const [accordian4, setaccordian4] = React.useState(false);
  const [accordian5, setaccordian5] = React.useState(false);
  const [accordian6, setaccordian6] = React.useState(false);
  const [accordian7, setaccordian7] = React.useState(false);

  const [accordionOpen, setAccordionOpen] = React.useState(false);

  const headingStyle = {
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

  return (
    <Grid
      id="FAQ"
      container
      item
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={5}
      pt={2}
      pb={5}
      xs={12}
      sx={{
        backgroundColor: "#030526",

        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
    >
      <Typography sx={headingStyle} variant="h1" textAlign="center">
        FAQ’s
      </Typography>

      <Box
        width="60%"
        gap={2}
        display="flex"
        bgcolor="#03050E"
        flexDirection="column"
        pb={5}
        sx={{ width: { xs: "90%", sm: "70", md: "60%" } }}
      >
        <Accordion
          expanded={accordian1}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian1 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian1(!accordian1)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian1(!accordian1)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian1
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>When to mint?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              Presale : TBC{" "}
              <span>
                <br />
              </span>
              Public Sale : TBC
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian2}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian2 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian2(!accordian2)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian2(!accordian2)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian2
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>How do I mint?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              1. Connect your Phantom wallet to our site by clicking on the
              ‘CONNECT PHANTOM’ button.{" "}
              <span>
                <br />
              </span>
              2. Once your wallet is connected, select how many 3D BUNNY PUNKS
              you would like to mint, and click the ‘MINT’ button.
              <span>
                <br />
              </span>
              3. Once you have minted your BUNNY(s), check your Phantom wallet
              for your transaction details. Your unique 3D BUNNY PUNKS will be
              revealed to you later in Magic Eden.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian3}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian3 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian3(!accordian3)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian3(!accordian3)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian3
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>What will the price mint be?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              Presale Price: TBC{" "}
              <span>
                <br />
              </span>
              Public Sale Price: TBC
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian4}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian4 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian4(!accordian4)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian4(!accordian4)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian4
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>What is the maximum mint per wallet?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              For presale between 1 - 5 mints.
              <span>
                <br />
              </span>
              For public sale, a maximum of 10 per wallet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian5}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian5 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian5(!accordian5)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian5(!accordian5)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian5
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>
              Which blockchain and what is the contract address?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              The blockchain and contract address will be made public shortly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian6}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian6 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian6(!accordian6)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian6(!accordian6)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian6
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>Will there be rarities?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              Yes, 3D BUNNY PUNKS NFTs will have several traits.{" "}
              <span>
                <br />
              </span>{" "}
              In addition, we will use a system such as rarity tools to help you
              to track the rarity of your 3D BUNNY PUNKS
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={accordian7}
          sx={{ border: "1px solid rgba(127,184,255,255)" }}
        >
          <AccordionSummary
            expandIcon={
              accordian7 ? (
                <>
                  <IconButton
                    style={{ cursor: "pointer" }}
                    color="white"
                    onClick={() => setaccordian7(!accordian7)}
                  >
                    <RemoveIcon sx={{ color: "white" }} />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setaccordian7(!accordian7)}
                  color="white"
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              )
            }
            sx={
              accordian7
                ? {
                    background: "#00b8ff",
                    color: "white",
                    cursor: "unset !important",
                  }
                : {
                    background: "#03050E",
                    color: "white",
                    cursor: "unset !important",
                  }
            }
          >
            <Typography>
              What are the benefits of owning more than one?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#03050E",
              color: "white",
            }}
          >
            <Typography>
              There will be benefits of owning more than one 3D BUNNY PUNKS not
              limited to staking. Doing so will also increase your odds of
              getting whitelist spots in future launchpad projects and other
              benefits to come.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
}
