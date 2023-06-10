import React, { memo } from "react";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import SidebarAccordion from "./SidebarAccordion";
import CardTop from "../../Components/Shared/CardTop";

export const accordionData1 = ["Settings", "Recent", "Facility Props"];
export const accordionData2 = ["Rooms", "Conveyors", "Carriers"];

const Sidebar = ({ openSidebar, setOpenSidebar, toggleDrawer }) => {
  return (
    <SwipeableDrawer
      open={openSidebar}
      onClose={() => setOpenSidebar(false)}
      onOpen={() => setOpenSidebar(true)}
      hideBackdrop
      sx={{ transform: "translateX(12px )" }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <CardTop text="Select Elements" toggleDrawer={toggleDrawer} />
        <List>
          {accordionData1.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", mb: 2 }}
            >
              <SidebarAccordion text={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {accordionData2.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", mb: 2 }}
            >
              <SidebarAccordion text={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default memo(Sidebar);
