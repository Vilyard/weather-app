"use client";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import ListData from "../../components/ListData";
import Box from "@mui/material/Box";

export default function City() {
  const [cityInp, setCityInp] = useState("");
  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeatherData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data?.cod === "400") throw data;

      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        height: "100vh",
        width: "100wh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          boxShadow: 1,
          borederRadius: 2,
          minWidth: 300,
          padding: "20px 20px",
        }}
      >
        <TextField
          variant="standard"
          label="Enter City"
          id="standard-basic"
          onChange={(e) => setCityInp(e.target.value)}
        />
        <Button
          sx={{
            alignSelf: "center",
          }}
          id="btn"
          variant="contained"
          onClick={() => getWeatherData()}
        >
          Get weather!
        </Button>
      </Box>
      <Box>
        {Object.keys(weatherData).length !== 0 ? (
          <>
            <ListData props={weatherData} />
          </>
        ) : null}
      </Box>
    </Container>
  );
}
