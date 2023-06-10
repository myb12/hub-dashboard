import styled from "styled-components";

export const StyledTop = styled("div")((props) => ({
  backgroundColor: props.sidebar ? "#2d2d2d" : "#53575A",
  width: "100%",
  height: "40px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 12px",

  div: {
    display: "flex",
    alignItems: "center",
  },

  h6: {
    fontSize: "16px",
    color: "#fff",
  },

  svg: {
    color: "#FFBF3C",
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "18px",

    path: {
      stroke: "#FFBF3C",
    },
  },
}));
