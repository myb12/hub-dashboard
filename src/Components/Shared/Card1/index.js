import React from "react";

import { Box, List, ListItem, ListItemText } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CustomCard from "../CustomCard";
import SmallBox from "./SmallBox";

const card1Data = [
  {
    title: "Mode:",
    desc: () => (
      <ListItemText
        primary="Auto"
        sx={{ color: "#1D7A32", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Status:",
    desc: () => (
      <ListItemText
        primary="Waiting"
        sx={{ color: "#FF7639", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Task Type:",
    desc: () => (
      <ListItemText
        primary="Idle"
        sx={{ color: "#125598", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Why Not Working:",
    desc: () => "",
  },
  {
    title: "Start Condition:",
    desc: () => "",
  },
  {
    title: "Pallet Sensors:",
    desc: () => (
      <Box sx={{ display: "flex" }}>
        <SmallBox text="LO" />
        <SmallBox text="LO" rounded={true} />
        <SmallBox text="RO" rounded={true} />
        <SmallBox text="RO" />
        <SmallBox text="RI" />
      </Box>
    ),
  },
  {
    title: "Job Status:",
    desc: () => (
      <ListItemText
        primary="Unknown"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "Active Shelf:",
    desc: () => (
      <ListItemText
        primary="0"
        sx={{ color: "#838296", span: { fontSize: "14px" } }}
      />
    ),
  },
  {
    title: "PLC Pallet Exists",
    desc: () => <SmallBox text="P" />,
  },

  {
    title: "Front Lock Status:",
    desc: () => "",
  },
];

const accordionDetailData = [
  "Room 01 : Oda 1",
  "Pallet [0] : 260 - No Car",
  "Carrier 2 (Turntable) : Turntable 1",
  "Carrier 1 (Lift) : Lift 1",
  "Facility",
];

const accordionData = ["Conveyor Commands", "Conveyor Config", "Links"];

const AccordionList = () => {
  return (
    <div>
      {accordionData.map((each, i) => (
        <Accordion
          key={i}
          sx={{
            bgcolor: "#53575A",
            color: "#fff",
            mb: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              borderBottom: "1px solid #FFBF3C",
              boxShadow: "none",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
              {each}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#fff",
              color: "#53575A",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          >
            <List>
              {accordionDetailData.map((data, i) => (
                <ListItem key={i}>
                  <ListItemText
                    primary={data}
                    sx={{ span: { fontSize: "16px", fontWeight: "600" } }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const Card1 = () => {
  return (
    <CustomCard
      card1Data={card1Data}
      renderAccordion={() => <AccordionList />}
    />
  );
};

export default Card1;
