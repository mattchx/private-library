import { Typography, Button, Container } from '@mui/material'
import NextLink from 'next/link'
export default function LandingPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">
        Build your dream digital library with Private Library
      </Typography>
      <Typography variant="body1">
        Empowering you to organize and access your book collection with ease!
      </Typography>
      <Button component={NextLink} href="/dashboard" variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  )
}