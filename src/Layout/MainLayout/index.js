import { Outlet } from "react-router-dom";

// material-ui
import { AppBar, Box, Toolbar } from "@mui/material";

// project imports

// assets

const MainLayout = () => {
  return (
    <Box>
      {/* header */}
      <AppBar>
        <Toolbar>
          <Box>HEADER</Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: "64px" }}>
        {/* drawer */}
        <Box>SIDEBAR</Box>

        {/* main content */}
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
