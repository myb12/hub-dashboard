import React from "react";
import { Box, Typography } from "@mui/material";

import { BiMessageRoundedError } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { StyledTop } from "./cardTopStyle";

const CardTop = ({ toggleDrawer = null, text }) => {
  const isSidebar = !!toggleDrawer;

  return (
    <StyledTop sidebar={isSidebar}>
      <Typography variant="h6">{text}</Typography>
      <Box>
        {!isSidebar && (
          <>
            <FiSettings title="Setttings" />
            <BiMessageRoundedError title="Need help?" />
          </>
        )}
        <GrClose onClick={toggleDrawer && toggleDrawer()} />
      </Box>
    </StyledTop>
  );
};

export default CardTop;
