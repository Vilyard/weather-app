import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ListData = (props: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "rgba(0,0,0,0.2)",
        color: "white",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
      }}
    >
      <List>
        <ListItem>
          <ListItemText primary={props.props.name} secondary="City" />
        </ListItem>
        <Divider />
        <ListItem>
          {" "}
          <ListItemText primary={props.props.sys.country} secondary="Country" />
        </ListItem>
        <Divider />
        {/* <li>{props.props.coord.lon}</li>
        <li>{props.props.coord.lat}</li> */}
        <ListItem>
          {" "}
          <ListItemText primary={props.props.timezone} secondary="Timezone" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={
              <img
                src={`http://openweathermap.org/img/w/${props.props.weather[0].icon}.png`}
              />
            }
            secondary={props.props.weather[0].main}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={props.props.weather[0].description}
            secondary="Description"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ListData;
