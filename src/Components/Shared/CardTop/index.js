import React from "react";
import { Box, Typography } from "@mui/material";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { StyledTop } from "./cardTopStyle";
import { BiMessageRoundedError } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const CardTop = ({ toggleDrawer = null, text }) => {
  const isSidebar = !!toggleDrawer;

  return (
    <StyledTop sidebar={isSidebar}>
    <Typography variant="h6">{text}</Typography>
      <Box>
        {!isSidebar && (
          <>
            <FiSettings />
            <BiMessageRoundedError />
          </>
        )}
        <GrClose onClick={toggleDrawer && toggleDrawer()} />
      </Box>
    </StyledTop>
  );
};

export default CardTop;
