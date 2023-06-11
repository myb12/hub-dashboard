import styled from "styled-components";

export const StyledCard = styled("div")((props) => ({
  backgroundColor: props.bg ? "#2D2C3F" : "#fff",
  position: "relative",
  paddingBottom: "32px",
  borderRadius: "4px",
}));

export const StyledExpand = styled("img")({
  position: "absolute",
  bottom: "10px",
  right: "4px",
  cursor: "pointer",
});

export const StyledNoData = styled("div")((props) => ({
  minHeight: props.height,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  span: {
    color: "#838296",
    fontSize: "16px",
  },
}));
