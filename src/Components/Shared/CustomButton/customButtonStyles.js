import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)((props) => ({
  background: props.bgColor,
  fontSize: "14px",
  padding: "10px",
  maxHeight: "44px",
  lineHeight: "1.2",

  "&:hover": {
    background: props.bgColor,
  },
}));
