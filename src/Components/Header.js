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
import { HashLink as Link } from "react-router-hash-link";

const pages = [
  "TheArt",
  "Roadmap",
  "Utilities",
  "Whitepaper",
  "Team",
  "FAQ",
  "Join",
];
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
      sx={trigger ? { background: "#BD00FF" } : { background: "transparent" }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", width: "100%" }}>
        <Box width="30%" display="flex" alignItems="center">
          <Avatar src={logo} alt="logo" />
        </Box>

        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        <Box width="70%">
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#TheArt"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                TheArt
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#Roadmap"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Roadmap
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#Utilities"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Utilities
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#Team"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Team
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#Whitepaper"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Whitepaper
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#FAQ"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                FAQ
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/#Join"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Join
              </Link>
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
