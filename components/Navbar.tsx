"use client";
import { Button, Container, Link } from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar() {
  return (
    <Container
      sx={{
        display: "grid",
        justifyItems: "center",
        width: "100wh",
      }}
    >
      <nav>
        <Box
          sx={{
            display: "inline-flex",
            flexWra: "nowrap",
            flexDirection: "rows",
            justifyContent:"space-around",
            boxShadow: 1,
            borederRadius: 2,
            minWidth: 300,
          }}
        >
          <Button
            sx={{
              alignSelf: "center",
            }}
            id="btn"
            variant="contained"
          >
            <Link
              underline="none"
              sx={{
                color: "#fff",
              }}
              href="/"
            >
              {" "}
              Home
            </Link>{" "}
          </Button>
          <Button
            sx={{
              alignSelf: "center",
            }}
            id="btn"
            variant="contained"
          >
            <Link
              underline="none"
              sx={{
                color: "#fff",
              }}
              href="/city"
            >
              City
            </Link>
          </Button>
          <Button
            sx={{
              alignSelf: "center",
            }}
            id="btn"
            variant="contained"
          >
            <Link
              underline="none"
              sx={{
                color: "#fff",
              }}
              href="/numb"
            >
              LonLat
            </Link>
          </Button>
        </Box>
      </nav>
    </Container>
  );
}
