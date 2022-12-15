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

  return (
    <section id="FAQ" style={{ width: "100%" }}>
      <Grid
        container
        item
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
        pb={5}
        xs={12}
        sx={{
          backgroundColor: "#030526",

          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      >
        <Typography className="headingStyle" fontSize="3em" textAlign="center">
          faqs
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
              <Typography>How do I mint?2</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#03050E",
                color: "white",
              }}
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </section>
  );
}
