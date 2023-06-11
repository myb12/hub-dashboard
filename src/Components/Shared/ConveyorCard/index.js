import React from "react";

import { List, ListItem, ListItemText } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CustomCard from "../CustomCard";
import { conveyorData } from "../../../data/fakeData";
import CardList from "../CustomCard/CardList";

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

const ConveyorCard = ({ text }) => {
  return (
    <CustomCard text={text}>
      <CardList data={conveyorData} />
      <AccordionList />
    </CustomCard>
  );
};

export default ConveyorCard;
