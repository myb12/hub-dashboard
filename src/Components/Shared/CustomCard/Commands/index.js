import React, { useState } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import CustomButton from "../../CustomButton";

import { StyledBtnWrapper } from "./commandsStyles";

const Commands = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        sx={{
          mb: 2,
          bgcolor: "#0000001a",
          fieldset: {
            border: "none",
          },
        }}
        placeholder="Any Room"
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" style={{ display: showClearIcon }}>
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
      <StyledBtnWrapper>
        <CustomButton text="Bring Car" bgColor="#125598" />
        <CustomButton text="Exit Car" bgColor="#53575A" />
        <CustomButton text="Delete Car" bgColor="#D32F2F" />
        <CustomButton text="Retrivial Cancel" bgColor="#E24747" />
      </StyledBtnWrapper>
    </Box>
  );
};

export default Commands;
