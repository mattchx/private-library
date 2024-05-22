import { Typography, Button, Container, Box } from "@mui/material";
import NextLink from "next/link";
export default function LandingPage() {
  return (
    <Box sx={{ marginTop: "20%" }}>
      <Container maxWidth="md">
        <Typography variant="h3">
          Build your dream digital library with:
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold" }} marginBottom={5}>
          Private Library
        </Typography>

        <Button
          color="secondary"
          variant="outlined"
          component={NextLink}
          href="/dashboard"
          sx={{
            paddingX: 4,
            paddingY: 1,
            fontSize: "1.5rem",
            fontStyle: "italic",
            margin: "auto",
          }}
        >
          Get Started Now
        </Button>
      </Container>
    </Box>
  );
}
