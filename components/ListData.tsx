import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  marginLeft: "770px",
};

const ListData = (props: any) => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary={props.props.id} secondary="City ID" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary={props.props.name} secondary="City Name" />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary={props.props.main.temp}
          secondary="City Temp &#8451;"
        />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText
          primary={props.props.timezone}
          secondary="City Timezone"
        />
      </ListItem>
    </List>
  );
};

export default ListData;
