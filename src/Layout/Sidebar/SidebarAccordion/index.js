import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import WidgetsIcon from "@mui/icons-material/Widgets";

import LivingIcon from "@mui/icons-material/Living";
import { MdConveyorBelt } from "react-icons/md";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { StyledListItem } from "./accordionStyle";

const childrenData = [
  "Lift 1",
  "Turn Table 1",
  "Lift 3",
  "Turn Table 3",
  "Shuttle 4",
  "Shuttle 5",
  "Shuttle 6",
  "Shuttle 7",
  "Lift 4",
];

export default function SidebarAccordion({ text }) {
  const [expanded, setExpanded] = useState(false);

  const renderIcon = (title) => {
    switch (title) {
      case "Settings":
        return <SettingsIcon />;
      case "Recent":
        return <ReplayCircleFilledIcon />;
      case "Facility Props":
        return <WidgetsIcon />;

      case "Rooms":
        return <LivingIcon />;
      case "Conveyors":
        return <MdConveyorBelt />;
      case "Carriers":
        return <ChildFriendlyIcon />;

      default:
        return null;
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const SingleAccordion = ({ text }) => {
    return (
      <Accordion
        expanded={expanded === text}
        onChange={handleChange(text)}
        sx={{ bgcolor: "#53575A", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls={`${text}1bh-content`}
          id={`${text}1bh-header`}
        >
          <StyledListItem>
            <ListItemIcon>{renderIcon(text)}</ListItemIcon>
            <ListItemText primary={text} sx={{ ml: "-20px" }} />
          </StyledListItem>
        </AccordionSummary>

        <AccordionDetails>
          <StyledListItem>
            <ListItemIcon>{renderIcon(text)}</ListItemIcon>
            <ListItemText primary={text} sx={{ ml: "-20px" }} />
          </StyledListItem>
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <Accordion
      expanded={expanded === text}
      onChange={handleChange(text)}
      sx={{ bgcolor: "#53575A", boxShadow: "none" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls={`${text}1bh-content`}
        id={`${text}1bh-header`}
      >
        <StyledListItem>
          <ListItemIcon>{renderIcon(text)}</ListItemIcon>
          <ListItemText primary={text} sx={{ ml: "-20px" }} />
        </StyledListItem>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {childrenData.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", mb: 2 }}
            >
              <SingleAccordion text={text} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
