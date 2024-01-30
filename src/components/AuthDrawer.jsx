import { useState } from "react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import LoginConsumer from "./forms/LoginConsumer";
import {
  USER_TYPE_CONSUMER,
  USER_TYPE_DELIVERYMAN,
  USER_TYPE_STORE,
} from "@/data/userTypes";
import LoginDeliveryman from "./forms/LoginDeliveryman";
import LoginStore from "./forms/LoginStore";
import RegisterConsumer from "./forms/RegisterConsumer";
import RegisterDeliveryman from "./forms/RegisterDeliveryman";
import RegisterStore from "./forms/RegisterStore";

// Responsável por abrir o menu lateral de login
export default function AuthDrawer(props) {
  const { open, onOpen, onClose } = props;
  const [currentTab, setCurrentTab] = useState("login");
  const searchParams = useSearchParams();
  const userType = searchParams.get("userType") || USER_TYPE_CONSUMER;

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Box sx={{ width: 350, py: 4 }}>
        <Box sx={{ px: 1 }}>
          <Stack sx={{ px: 1, mb: 2 }}>
            <Typography variant="h6">
              {userType === USER_TYPE_CONSUMER && "Consumidor"}
              {userType === USER_TYPE_DELIVERYMAN && "Entregador"}
              {userType === USER_TYPE_STORE && "Loja"}
            </Typography>
            <Typography>
              Nunc tincidunt sit amet metus ac convallis. Donec tincidunt
              porttitor mauris, nec finibus risus hendrerit et.
            </Typography>
          </Stack>
          <Tabs
            value={currentTab}
            onChange={(_, value) => setCurrentTab(value)}
          >
            <Tab label="Login" value="login" />
            <Tab label="Cadastro" value="register" />
          </Tabs>
        </Box>
        <Box sx={{ my: 2 }}>
          {currentTab === "login" && (
            <>
              {userType === USER_TYPE_CONSUMER && <LoginConsumer />}
              {userType === USER_TYPE_DELIVERYMAN && <LoginDeliveryman />}
              {userType === USER_TYPE_STORE && <LoginStore />}
            </>
          )}
          {currentTab === "register" && (
            <>
              {userType === USER_TYPE_CONSUMER && (
                <RegisterConsumer onRegister={() => setCurrentTab("login")} />
              )}
              {userType === USER_TYPE_DELIVERYMAN && <RegisterDeliveryman />}
              {userType === USER_TYPE_STORE && <RegisterStore />}
            </>
          )}
        </Box>
        <Box sx={{ px: 1 }}>
          <Stack spacing={1} sx={{ textAlign: "center" }}>
            {userType !== USER_TYPE_CONSUMER && (
              <Link
                href="/"
                variant="body2"
                underline="hover"
                component={NextLink}
              >
                Clique aqui se você for um consumidor
              </Link>
            )}
            {userType !== USER_TYPE_DELIVERYMAN && (
              <Link
                href={`?userType=${USER_TYPE_DELIVERYMAN}`}
                variant="body2"
                underline="hover"
                component={NextLink}
              >
                Clique aqui se você for um entregador
              </Link>
            )}
            {userType !== USER_TYPE_STORE && (
              <Link
                href={`?userType=${USER_TYPE_STORE}`}
                variant="body2"
                underline="hover"
                component={NextLink}
              >
                Clique aqui se você for uma loja ou restaurante
              </Link>
            )}
          </Stack>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
