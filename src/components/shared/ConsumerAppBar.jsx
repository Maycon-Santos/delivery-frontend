"use client";

import { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function ConsumerAppBar(props) {
  const { title } = props;
  const [accountMenuIsOpen, setAccountMenuIsOpen] = useState(false);
  const accountIconRef = useRef();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <IconButton
          size="large"
          onClick={() => setAccountMenuIsOpen(true)}
          color="inherit"
          ref={accountIconRef}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={accountIconRef.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={accountMenuIsOpen}
          onClose={() => setAccountMenuIsOpen(false)}
        >
          <MenuItem onClick={() => setAccountMenuIsOpen(true)}>
            Ver perfil
          </MenuItem>
          <MenuItem onClick={() => setAccountMenuIsOpen(true)}>
            Configurações
          </MenuItem>
          <MenuItem onClick={() => setAccountMenuIsOpen(true)}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
