"use client";
import { useState } from "react";
import { Button, Divider, List, ListItem, ListItemText, TextField } from "@mui/material";

const API_KEY = "dcb5148bad46482b3ecd9ed999fa6f32"
export default function Home() {
  const [cityInp, setCityInp] = useState("");
  const [weatherData, setWeatherData] = useState<any>({});
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    marginLeft:"770px"
  };
  async function getWeatherData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div style={{
     textAlign:"center"
    }}>
      <div>
        <TextField
          variant="standard"
          label="Enter City"
          id="standard-basic"
          onChange={(e) => setCityInp(e.target.value)}
        />
        <Button variant="contained" onClick={() => getWeatherData()}>Get weather!</Button>
      </div>
      {Object.keys(weatherData).length !== 0 ? (
        <>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary={weatherData.id} secondary="City ID" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary={weatherData.name} secondary="City Name"/>
            </ListItem>
            <ListItem button>
              <ListItemText primary={weatherData.main.temp} secondary="City Temp" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary={weatherData.timezone}  secondary="City Timezone"/>
            </ListItem>
          </List>
        </>
      ) : null}
    </div>
  );
}
