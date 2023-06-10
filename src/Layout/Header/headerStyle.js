import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: "78px",
  justifyContent: "center",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "#FFFFFFF",
}));

export const StyledTool = styled(Toolbar)({
  display: "grid",
  gridTemplateColumns: "240px auto",

  svg: {
    fill: "#fff",
    fontSize: "24px",
  },
});

export const HeaderRight = styled("div")({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridColumnGap: "28px",
  alignItems: "center",
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "-24px",

  button: {
    marginRight: "12px",
    maxHeight: "50px",
    padding: "12px",
    backgroundColor: "#53575A",
    border: "2px solid #53575A",
    textTransform: "capitalize",

    "&:hover": {
      border: "2px solid #FFBF3C",
      backgroundColor: "#53575A",
    },
  },
});

export const ArrowWrapper = styled("div")({
  height: "35px",
  width: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F1F1F9",
  border: "1px solid #E8E9EC",
  marginRight: "10px",
  borderRadius: "4px",
  cursor: "pointer",

  svg: {
    fill: "#808495",
    fontSize: "18px",
  },
});

export const Profile = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const Icons = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRight: "2px solid #EBEBF2",

  img: {
    marginRight: "16px",
  },
});

export const User = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  marginLeft: "16px",

  h6: {
    color: "#4D4F5C",
    fontSize: "16px",
  },

  svg: {
    fill: "#A4AFB7",
    fontSize: "32px",
    margin: "0 10px",
  },
});

export const Setting = styled("div")({
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  color: "#999999",

  svg: {
    color: "#999999",
  },
});
