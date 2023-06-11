import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const CardList = ({ data }) => {
  return (
    <List>
      {data.map((each) => (
        <ListItem sx={{ borderBottom: "1px solid #E8E8E8" }}>
          <ListItemText
            primary={each.title}
            sx={{ span: { fontSize: "14px" } }}
          />
          {each?.desc()}
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
