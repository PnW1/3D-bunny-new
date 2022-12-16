import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BunnyTabs() {
  const [value, setValue] = React.useState(0);

  const stylebodytext = {
    fontFamily: "Poppins",
    fontStyle: "normal",

    fontWeight: 400,
    flex: "none",
    order: 0,
    flexGrow: 0,

    lineHeight: "140%",
    color: "white",

    flex: "none",
    order: 0,
    flexGrow: 0,
  };
  const boxfont = {
    textAlign: "left",
    borderRight: 1,
    borderColor: "divider",
    fontFamily: "Nandia",
    fontStyle: "normal",
    fontWeight: 400,
    flex: "none",
    padding: "2px",
    order: 0,
    flexGrow: 0,
    fontSize: {
      xl: "18px",
      xs: "12px",
      sm: "16px",
      md: "16px",
      lg: "16px",
    },
    lineHeight: "24px",
    textTransform: "uppercase",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        height: "100%",
      }}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        sx={{
          width: { xs: "39%", sm: "30%" },
          background: "rgba(0, 184, 255, 0.06)",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={boxfont}
        >
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="$BUNNY tokens & staking system"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Land in the Metaverse"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Mint Pass "
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Exceptional Rendering Quality "
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Giveaways"
            {...a11yProps(4)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Comic Book"
            {...a11yProps(5)}
          />
          <Tab
            sx={{
              textAlign: "left",
              alignSelf: "start",
              alignContent: "start",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="Moral initiatives"
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <Box
        height="100%"
        sx={{
          width: { xs: "61%", sm: "70%" },
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: " 0px 20px 20px 0px",
          overflow: "auto",
        }}
      >
        <TabPanel value={value} index={0}>
          <Typography sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
          <Typography mt={5} sx={stylebodytext}>
            75% - Staking & Community Rewards among 3D Bunny Punks NFT holders.
            6% - Liquidity. Tokens for the liquidity pool. 8% - Team. 3D Bunny
            Punks team payments. 5% - DAO. 3D Bunny Punks DAO funds. 1% -
            Airdrops.Token release airdrops for 3D Bunny Punks holders and
            project supporters. 5% - Treasury- Locked treasury that could be
            unlocked by community voting to achieve chosen goals. We will burn
            all $BUNNY used in utilities, and 5% of royalties will be used to
            buy back and burn $BUNNY.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography mt={5} sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography mt={5} sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
        <TabPanel mt={5} value={value} index={6}>
          <Typography sx={stylebodytext}>
            The token will be available after the presale. $BUNNY is a utility
            token with a unique buyback-andburn mechanism and multiple utilities
            related to the 3D Bunny Punks NFT collection. $BUNNY will be
            distributed as follows:{" "}
          </Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
