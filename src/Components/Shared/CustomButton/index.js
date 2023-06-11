import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)((props) => ({
  background: props.bgColor,
  fontSize: "14px",
  padding: "10px",
  maxHeight: "44px",
  lineHeight: "1.2",
}));

const CustomButton = ({ text, bgColor }) => {
  return (
    <StyledButton variant="contained" bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export default CustomButton;
