"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
  CircularProgress,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import { Book } from "../../lib/types";
import { api, useBooks } from "../api";
import NextLink from "next/link";

export default function BookList() {
  const { books, isLoading, isError } = useBooks();

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress color="secondary" />
      </Box>
    );
  if (isError)
    return (
      <Box display="flex" justifyContent="center">
        <Alert variant="filled" severity="error">
          There was a error fetching your books...
        </Alert>
      </Box>
    );

  return (
    <Box marginBottom={10}>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      {books.length === 0 && (
        <Box marginTop={6}>
          <Typography variant="h5" align="center">
            What are you waiting for? Add some books!
          </Typography>
        </Box>
      )}
      <Container>
        <Grid container spacing={4}>
          {books.length > 0 &&
            books?.map((book: Book) => (
              <Grid item xs={7} md={4} key={book.id}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://m.media-amazon.com/images/I/7173a8decnL._SL1500_.jpg"
                    title="book image placeholder"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By: {book.author}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="info"
                      variant="outlined"
                      component={NextLink}
                      href={`/book/${book.id}`}
                      size="large"
                      fullWidth
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
