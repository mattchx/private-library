import { Typography, Button, Container } from '@mui/material'

export default function LandingPage () {
    return (
        <Container maxWidth="md">
            <Typography variant="h1">
                Build your dream digital library with Private Library
            </Typography>
            <Typography variant="body1">
                Empowering you to organize and access your book collection with ease!
            </Typography>
            {/* todo: add button as link to home */}
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </Container>
    )
}