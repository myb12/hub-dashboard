import styled from "styled-components";

export const StyledSmallBox = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#53575A",
  height: "22px",
  width: "22px",
  borderRadius: props.rounded ? "2px" : 0,
  marginLeft: "3px",
  fontSize: "12px",
  fontWeight: "700",
}));
