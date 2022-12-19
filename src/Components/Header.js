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
import logo from "../Assets/logo.png";

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
  const trigger = useScrollTrigger();
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
      <Container maxWidth="xl" sx={{ display: "flex", width: "100%" }}>
        <Box
          width="20%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={logo} alt="logo" />
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
              <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
                <Button sx={{ color: "black", display: "block" }}>
                  <HashLink
                    to="/#TheArt"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    The Art
                  </HashLink>
                </Button>
                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Roadmap"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Roadmap
                  </HashLink>
                </Button>
                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Utilities"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Utilities
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Team"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Team
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Whitepaper"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Whitepaper
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#FAQ"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    FAQ
                  </HashLink>
                </Button>

                <Button sx={{ color: "white", display: "block" }}>
                  <HashLink
                    to="/#Join"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Join
                  </HashLink>
                </Button>
              </MenuItem>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<Wallet />}
                fullWidth
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
                fullWidth
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
              </Button>
            </Menu>
          </Box>
          <Box
            width="100%"
            display="flex"
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

            <Button
              variant="contained"
              color="secondary"
              startIcon={
                <Wallet
                  sx={{
                    width: { xs: "15px", lg: "24px" },
                    height: { xs: "15px", lg: "24px" },
                  }}
                />
              }
              sx={{
                fontFamily: "Poppins",

                fontSize: { xs: "7px", lg: "10px" },
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
              startIcon={
                <Wallet
                  sx={{
                    width: { xs: "15px", lg: "24px" },
                    height: { xs: "15px", lg: "24px" },
                  }}
                />
              }
              sx={{
                fontFamily: "Poppins",

                fontSize: { xs: "7px", lg: "10px" },
                borderRadius: "5px",
                "&.MuiButton-contained": {
                  height: "40px",

                  alignSelf: "center",
                },
              }}
            >
              <Link
                href="https://discord.com/invite/ZMwKVNQEPe"
                rel="noopener noreferrer"
                target="_blank"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "white",
                  fontSize: { xs: "7px", lg: "10px" },
                }}
              >
                {" "}
                Join Discord
              </Link>
            </Button>

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
