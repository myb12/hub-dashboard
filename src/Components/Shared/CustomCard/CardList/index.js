import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const CardList = ({ data, icon = null }) => {
  return (
    <List>
      {data.map((each) => (
        <ListItem sx={{ py: 0, borderBottom: "1px solid #E8E8E8" }}>
          <ListItemText
            primary={each.title}
            sx={{ span: { fontSize: "14px" } }}
          />
          {each?.desc()}
          {icon && icon()}
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
