"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AuthDrawer from "@/components/AuthDrawer";

export default function Home() {
  const [loginDrawerIsOpen, setLoginDrawerIsOpen] = useState(false);

  return (
    <>
      <AuthDrawer
        open={loginDrawerIsOpen}
        onOpen={() => setLoginDrawerIsOpen(true)}
        onClose={() => setLoginDrawerIsOpen(false)}
      />
      {/* Barra de navegação do topo */}
      <AppBar position="static">
        {/* Fica responsável por abrir todas as ferramentas da barra de navegação */}
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
          {/* Typography - Componente que cuida da tipografia */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Delivery
          </Typography>
          <Button color="inherit" onClick={() => setLoginDrawerIsOpen(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
