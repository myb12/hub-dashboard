import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "../Sidebar";
import Header from "../Header";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        toggleDrawer={toggleDrawer}
      />
      <Box component="main" sx={{ flexGrow: 1, px: 2, py: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
