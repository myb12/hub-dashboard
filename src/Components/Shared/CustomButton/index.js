import React from "react";
import { StyledButton } from "./customButtonStyles";

const CustomButton = ({ text, bgColor }) => {
  return (
    <StyledButton variant="contained" bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export default CustomButton;
