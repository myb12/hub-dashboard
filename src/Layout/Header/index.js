import React, { memo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import {
  AppBar,
  ArrowWrapper,
  ButtonWrapper,
  HeaderRight,
  StyledTool,
  Profile,
  Icons,
  User,
  Setting,
} from "./headerStyle";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import EditIcon from "../../../src/assets/svg/edit-icon.svg";
import SignalIcon from "../../../src/assets/svg/signal-icon.svg";
import MessageIcon from "../../../src/assets/svg/message-icon.svg";
import NotificationIcon from "../../../src/assets/svg/notification-icon.svg";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import UserImage from "../../../src/assets/images/user.svg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import PrivacyTipSharpIcon from "@mui/icons-material/PrivacyTipSharp";
import DonutLargeSharpIcon from "@mui/icons-material/DonutLargeSharp";

const buttonData = [
  {
    id: 1,
    title: "Workspace-1",
  },
  {
    id: 2,
    title: "Workspace-2",
  },
  {
    id: 3,
    title: "Workspace-3",
  },
  {
    id: 4,
    title: "Workspace-4",
  },
  {
    id: 5,
    title: "Workspace-5",
  },
  {
    id: 6,
    title: "Workspace-6",
  },
];

const settings = [
  ["Status", "Online"],
  "Account Setting",
  "Notification",
  "Help",
  "Logout",
];

const Header = ({ handleDrawerToggle, open }) => {
  const [anchorElUser, setAnchorElUser] = useState(false);

  const toggleUserMenu = (event) => {
    setAnchorElUser(!anchorElUser);
  };

  const renderIcon = (title) => {
    switch (title) {
      case "Status":
        return <DonutLargeSharpIcon sx={{ mr: 2 }} />;
      case "Account Setting":
        return <ManageAccountsSharpIcon sx={{ mr: 2 }} />;
      case "Notification":
        return <NotificationsNoneOutlinedIcon sx={{ mr: 2 }} />;
      case "Help":
        return <PrivacyTipSharpIcon sx={{ mr: 2 }} />;

      case "Logout":
        return <LogoutSharpIcon sx={{ mr: 2 }} />;

      default:
        break;
    }
  };

  return (
    <AppBar position="fixed" open={open}>
      <StyledTool>
        <Box
          sx={{
            position: "relative",
            "&:after": {
              content: "''",
              background: "#7A7A7A",
              width: "1px",
              height: "48px",
              position: "absolute",
              left: "50%",
              top: "calc(50% - 24px)",
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              height: "28px",
              width: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#53575A",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#53575A",
              },
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Box>
        <HeaderRight>
          <ButtonWrapper>
            <ArrowWrapper>
              <ArrowBackIosNewSharpIcon />
            </ArrowWrapper>
            {buttonData.map(({ id, title }) => (
              <Button key={id} variant="contained">
                {title}
              </Button>
            ))}
            <ArrowWrapper>
              <ArrowForwardIosSharpIcon />
            </ArrowWrapper>
          </ButtonWrapper>

          <Profile>
            <Icons>
              <img src={EditIcon} alt="" />
              <img src={SignalIcon} alt="" />
              <img src={MessageIcon} alt="" />
              <img src={NotificationIcon} alt="" />
            </Icons>
            <User onClick={toggleUserMenu}>
              <Typography variant="h6">John Doe</Typography>
              <ExpandMoreOutlinedIcon />
              <IconButton
                sx={{
                  p: 0,
                  background: "#E3E7E7",
                  height: "40px",
                  width: "40px",
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src={UserImage}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    img: {
                      width: "70%",
                      height: "auto",
                    },
                  }}
                />
              </IconButton>

              <Menu
                sx={{
                  mt: "45px",
                  transform: "translateX(-60px)",
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={anchorElUser}
                onClose={toggleUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem
                    key={i}
                    onClick={toggleUserMenu}
                    sx={{
                      px: 8,
                      borderBottom: i < settings.length - 1 && "1px solid #ddd",
                    }}
                  >
                    <Setting>
                      {Array.isArray(setting) ? (
                        <Typography
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              fontWeight: "700",
                            }}
                          >
                            {renderIcon(setting[0])}
                            {setting[0]}:{" "}
                          </Typography>
                          <Typography
                            sx={{ ml: 1, color: "#61BD63", fontWeight: "700" }}
                          >
                            {setting[1]}
                          </Typography>
                        </Typography>
                      ) : (
                        <>
                          {renderIcon(setting)}
                          {setting}
                        </>
                      )}
                    </Setting>
                  </MenuItem>
                ))}
              </Menu>
            </User>
          </Profile>
        </HeaderRight>
      </StyledTool>
    </AppBar>
  );
};

export default memo(Header);
