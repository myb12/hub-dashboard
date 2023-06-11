import React from "react";

import { Box, List, ListItem, ListItemText } from "@mui/material";

import CardTop from "../CardTop";
import ExpandIcon from "../../../../src/assets/svg/share.svg";

import { StyledCard, StyledExpand, StyledNoData } from "./customCardStyle";

const CustomCard = ({
  children = null,
  text = "",
  noData = false,
  height = "",
  bg = "",
}) => {
  return (
    <StyledCard bg={bg}>
      <CardTop text={text} />
      {children ? (
        children
      ) : (
        <StyledNoData height={height}>
          {noData && <span>No data to display</span>}
        </StyledNoData>
      )}
      <StyledExpand src={ExpandIcon} alt="Expand" />
    </StyledCard>
  );
};

export default CustomCard;
