import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

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
    fontSize: { xs: ".7em", sm: ".9em", md: "1em" },
    lineHeight: "140%",
    color: "white",

    flex: "none",
    order: 0,
    flexGrow: 0,
  };
  const boxfont = {
    textAlign: "justify",

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
          indicatorColor="none"
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
              width: "100%",
              fontSize: {
                xs: "12px",
                sm: "15px",

                lg: "18px",
              },
            }}
            label="$BUNNY tokens & staking system"
            {...a11yProps(0)}
          />
          {/* <Divider style={{ background: "rgba(0, 184, 255, 0.5)" }} /> */}
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
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            6% - Liquidity. Tokens for the liquidity pool.{" "}
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            8% - Team. 3D Bunny Punks team payments.{" "}
            <span>
              <br />
            </span>{" "}
            <span>
              <br />
            </span>
            5% - DAO. 3D Bunny Punks DAO funds.{" "}
            <span>
              <br />
            </span>{" "}
            <span>
              <br />
            </span>
            1% - Airdrops.Token release airdrops for 3D Bunny Punks holders and
            project supporters.{" "}
            <span>
              <br />
            </span>{" "}
            <span>
              <br />
            </span>
            5% - Treasury- Locked treasury that could be unlocked by community
            voting to achieve chosen goals. We will burn all $BUNNY used in
            utilities, and 5% of royalties will be used to buy back and burn
            $BUNNY.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={stylebodytext}>
            3D BUNNY PUNKS anticipates acquiring land in the Metaverse, creating
            a virtual member space for holders to hang out together as their
            unique bunny avatars. Our metaverse space intends to function as the
            3D Bunny Punks Headquarters that NFT holders can access. Also, NFT
            holders can have digital access to important events such as upcoming
            NFT conferences and enjoy our digital clubhouse, where 3D Bunny
            Punks can hang out and partake in fun games. Blockchain gaming with
            NFTs{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Bunny Defender: The Game
            </span>{" "}
            [2023] Powered By- Unreal Engine 5 3D Bunny Punks uses blockchain
            technology to empower holders with actual digital ownership. Each
            NFT is non-fungible, meaning unique, and no identical copy exists.{" "}
            <span>
              <br />
            </span>
            It is indivisible and is not interchangeable. The time of purchasing
            video game character skins for single use is over now that 3D Bunny
            Punks is here. In-game avatars can be tokenised through blockchain
            technology, allowing users to buy, sell, and trade digital items.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography sx={stylebodytext}>
            The NFT acts as a mint pass for future drops meaning holders of the
            3D Bunny Punks NFT have early access to future collections.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography sx={stylebodytext}>
            High-quality rendering means that 3D Bunny Punks are equipped to be
            used in movies, games, the Metaverse, and even FaceTime. Holders of
            the NFT can expect access to their 3D Bunny Punks files, providing
            them with complete control over their digital property. With this
            file, you will construct animations of your Bunny.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography sx={stylebodytext}>
            3D Bunny Punks holders are eligible to participate in regular
            giveaways, raffles, quizzes, trivia nights, and fun initiatives that
            reward members of the 3D Bunny Punks. Rewards might range from
            influencer party invitations to free NFTs, crypto, and more.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography sx={stylebodytext}>
            3D Bunny Punks Comic Book by Gabriel Carvajal. [character designer
            and comic artist] Each episode contains exciting stories.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Typography sx={stylebodytext}>
            3D bunny punks will be helping,
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            <span style={{ fontWeight: "bold" }}>• </span>Orphanage homes.
            [India, Bangladesh, Nigeria]{" "}
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            <span style={{ fontWeight: "bold" }}>• </span> Planting of trees. To
            improve the air quality by planting over 500 trees, rehabilitating
            and rescuing domestic animals like rabbits e.t.c and educating
            people about pet care.{" "}
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            3D BUNNY PUNKS is a community-focused project aiming to protect and
            care for humans and animals.
          </Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
