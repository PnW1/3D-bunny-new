import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../Assets/logo.svg";
import wallet from "../Assets/wallet-light.svg";
import discord from "../Assets/discord-white.svg";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { DiscFull, Wallet } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import Link from "@mui/material/Link";

const pages = [
  "TheArt",
  "Roadmap",
  "Utilities",
  "Whitepaper",
  "Team",
  "FAQ",
  "Join",
];

const itemstyle = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "140%",
  color: "#E8F2FF",
  flex: "none",
  order: 0,
  flexGrow: 0,
  zIndex: 0,
  my: 2,
  display: "block",
};

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{ padding: "0px", margin: "0px" }}
      sx={
        trigger
          ? { background: "#25194c" }
          : { background: "transparent", elevation: 1 }
      }
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          height: { xs: "50px", md: "80px" },
        }}
      >
        <Box
          width="20%"
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img className="logostyle" src={logo} alt="logo" />
        </Box>

        <Box width="80%">
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  color: "white",
                }}
              >
                <Button sx={{ color: "black", display: "block" }}>
                  <HashLink
                    to="/#TheArt"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    The Art
                  </HashLink>
                </Button>
                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Roadmap"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Roadmap
                  </HashLink>
                </Button>
                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Utilities"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Utilities
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Team"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Team
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Whitepaper"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Whitepaper
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#FAQ"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    FAQ
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Join"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Join
                  </HashLink>
                </Button>
              </MenuItem>

              <Button
                variant="contained"
                startIcon={<img className="discordimage" src={wallet}></img>}
                sx={{
                  fontFamily: "Poppins",

                  fontSize: { xs: "15px", lg: "10px" },

                  "&.MuiButton-contained": {
                    height: "40px",

                    alignSelf: "center",
                    background: "#B80FBA",
                  },
                }}
                fullWidth
              >
                connect wallet
              </Button>
              <Button
                mt={2}
                mb={2}
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<img className="discordimage" src={discord}></img>}
                sx={{
                  fontFamily: "Poppins",

                  "&.MuiButton-contained": {
                    height: "40px",

                    alignSelf: "center",
                    background: "#221669",
                  },
                }}
              >
                <Link
                  href="https://discord.gg/3dbunnypunks"
                  rel="noopener noreferrer"
                  target="_blank"
                  sx={{
                    fontFamily: "Poppins",
                    textDecoration: "none",
                    color: "white",
                    fontSize: { xs: "15px", lg: "10px" },
                  }}
                >
                  {" "}
                  Join Discord
                </Link>
              </Button>
            </Menu>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            gap={1}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button sx={itemstyle}>
              <HashLink
                to="/#TheArt"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                The Art
              </HashLink>
            </Button>
            <Button sx={itemstyle}>
              <HashLink
                to="/#Roadmap"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                Roadmap
              </HashLink>
            </Button>
            <Button sx={itemstyle}>
              <HashLink
                to="/#Utilities"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                Utilities
              </HashLink>
            </Button>

            <Button sx={itemstyle}>
              <HashLink
                to="/#Team"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                Team
              </HashLink>
            </Button>

            <Button sx={itemstyle}>
              <HashLink
                to="/#Whitepaper"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                Whitepaper
              </HashLink>
            </Button>

            <Button sx={itemstyle}>
              <HashLink
                to="/#FAQ"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              >
                FAQ
              </HashLink>
            </Button>

            <Button sx={itemstyle}>
              <HashLink
                to="/#Join"
                style={{
                  textDecoration: "none",
                  color: "#E8F2FF",
                  textTransform: "none",
                }}
              ></HashLink>
            </Button>
            <Box
              display="flex"
              alignItems="center"
              alignSelf="center"
              height="100%"
              gap={1}
            >
              <Link
                href="#"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "white",
                  fontSize: { xs: "7px", lg: "10px" },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<img className="discordimage" src={wallet}></img>}
                  sx={{
                    fontFamily: "Poppins",

                    borderRadius: "50px",
                    "&.MuiButton-contained": {
                      height: "40px",

                      alignSelf: "center",
                      background: "#B80FBA",
                    },
                  }}
                >
                  connect wallet
                </Button>
              </Link>

              <Link
                href="https://discord.gg/3dbunnypunks"
                rel="noopener noreferrer"
                target="_blank"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "white",
                  fontSize: { xs: "7px", lg: "10px" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<img className="discordimage" src={discord}></img>}
                  sx={{
                    fontFamily: "Poppins",

                    borderRadius: "50px",
                    "&.MuiButton-contained": {
                      height: "40px",

                      alignSelf: "center",
                      background: "#221669",
                    },
                  }}
                >
                  {" "}
                  Join Discord
                </Button>
              </Link>
            </Box>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/#Roadmap"
                style={{ textDecoration: "none", color: "#04212b" }}
              >
                Roadmap
              </Link>
            </Button> */}

            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Utilities
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Whitepaper
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Team
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              FAQ
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Join
            </Button>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<Wallet />}
              sx={{
                fontFamily: "Poppins",

                fontSize: "10px",
                borderRadius: "5px",
                "&.MuiButton-contained": {
                  height: "40px",

                  alignSelf: "center",
                },
              }}
            >
              connect wallet
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Wallet />}
              sx={{
                fontFamily: "Poppins",

                fontSize: "10px",
                borderRadius: "5px",
                "&.MuiButton-contained": {
                  height: "40px",

                  alignSelf: "center",
                },
              }}
            >
              Join Discord
            </Button> */}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
