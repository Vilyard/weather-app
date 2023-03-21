"use client";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import ListData from "../../components/ListData";
import Box from "@mui/material/Box";

export default function Numb() {
  const [latInp, setLatInp] = useState("");
  const [lonInp, setLonInp] = useState("");
  const [numWeatherData, setNumWeatherData] = useState<any>({});
  async function getDatabyLon() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latInp}&lon=${lonInp}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data?.cod === "400") throw data;
      setNumWeatherData(data);
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
          id="outlined-number"
          type="number"
          label="Enter Longitude"
          onChange={(e) => setLonInp(e.target.value)}
        />
        <TextField
          id="outlined-number"
          type="number"
          label="Enter Latitude"
          onChange={(e) => setLatInp(e.target.value)}
        />
        <Button
          sx={{
            alignSelf: "center",
          }}
          id="btn"
          variant="contained"
          onClick={() => getDatabyLon()}
        >
          Get weather!
        </Button>
      </Box>
      <br />
      <Box>
        {Object.keys(numWeatherData).length !== 0 ? (
          <>
            <ListData props={numWeatherData} />
          </>
        ) : null}
      </Box>
    </Container>
  );
}
