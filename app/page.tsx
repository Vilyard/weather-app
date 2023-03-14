"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ListData from "../components/ListData";

export default function Home() {
  const [cityInp, setCityInp] = useState("");
  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeatherData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      );
      console.log(res);
      const data = await res.json();
      if (data?.cod === "400") throw data;

      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>
        <TextField
          variant="standard"
          label="Enter City"
          id="standard-basic"
          onChange={(e) => setCityInp(e.target.value)}
        />
        <Button variant="contained" onClick={() => getWeatherData()}>
          Get weather!
        </Button>
      </div>
      {Object.keys(weatherData).length !== 0 ? (
        <>
          <ListData props={weatherData} />
        </>
      ) : null}
    </div>
  );
}
