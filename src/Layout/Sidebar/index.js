import React, { memo } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import SidebarAccordion from "./SidebarAccordion";
import styled from "styled-components";
import { Typography } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

export const accordionData1 = ["Settings", "Recent", "Facility Props"];
export const accordionData2 = ["Rooms", "Conveyors", "Carriers"];

export const StyledTop = styled("div")({
  backgroundColor: "#2d2d2d",
  height: "40px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 12px",

  h6: {
    fontSize: "16px",
    color: "#fff",
  },

  svg: {
    color: "#FFBF3C",
    cursor: "pointer",
  },
});

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
        <StyledTop>
          <Typography variant="h6">Select Elements</Typography>
          <CloseSharpIcon onClick={toggleDrawer()} />
        </StyledTop>
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
