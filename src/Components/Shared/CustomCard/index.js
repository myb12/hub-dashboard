import React from "react";

import { Box, List, ListItem, ListItemText } from "@mui/material";

import CardTop from "../CardTop";
import ExpandIcon from "../../../../src/assets/svg/share.svg";

import { StyledCard, StyledExpand } from "./customCardStyle";

const CustomCard = ({ children, text = "" }) => {
  return (
    <StyledCard>
      <CardTop text={text} />
      {children}
      <StyledExpand src={ExpandIcon} alt="Expand" />
    </StyledCard>
  );
};

export default CustomCard;
