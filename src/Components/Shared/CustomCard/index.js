import React from "react";

import { Box, List, ListItem, ListItemText } from "@mui/material";

import CardTop from "../CardTop";
import ExpandIcon from "../../../../src/assets/svg/share.svg";

import { StyledCard, StyledExpand } from "./customCardStyle";

const CustomCard = ({ card1Data, renderAccordion = null }) => {
  return (
    <StyledCard>
      <CardTop text="Conveyor Id - 01" />

      <List>
        {card1Data.map((data) => (
          <ListItem sx={{ borderBottom: "1px solid #E8E8E8" }}>
            <ListItemText
              primary={data.title}
              sx={{ span: { fontSize: "14px" } }}
            />
            {data?.desc()}
          </ListItem>
        ))}
      </List>

      {!!renderAccordion && <Box sx={{ px: 1.3 }}>{renderAccordion()}</Box>}

      <StyledExpand src={ExpandIcon} alt="Expand" />
    </StyledCard>
  );
};

export default CustomCard;
