"use client";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import ListData from "../../components/ListData";
import Box from "@mui/material/Box";
import { GetCityData } from "../api/hello/route";

export default function City() {
  const [cityInp, setCityInp] = useState("");
  const [weatherData, setWeatherData] = useState<any>({});
  async function getWeatherData() {
    try {
      const res = await GetCityData(cityInp);
      setWeatherData(res);
    } catch (err) {
      console.log(err);
    }
  }
  GetCityData;
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
