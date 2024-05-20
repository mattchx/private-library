"use client";

import { useEffect, useState } from "react";
import { Alert, Box, Button, Card, CardContent, CardActions, CardMedia, Container, CircularProgress, Grid, Typography, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Book } from "../../lib/types";
import { api, useBooks } from '../api';
import NextLink from 'next/link'

export default function BookList() {
  const { books, isLoading, isError, mutate } = useBooks()

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/books/${id}`);
      mutate();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (isLoading) return <Box display="flex" justifyContent="center"><CircularProgress color="secondary" /></Box>
  if (isError) return <Box display="flex" justifyContent="center"><Alert severity="error">There was a error fetching your books...</Alert></Box>
  console.log("books: ", books)
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>

      {(books.length === 0) && <Box marginTop={6} marginBottom={10}><Typography variant="h5" align="center">What are you waiting for? Add some books!</Typography></Box>}
      <Container>
        <Grid container spacing={4}>

          {books.length > 0 && books?.map((book: Book) => (
            <Grid item xs={6} key={book.id}>
              <Card sx={{ maxWidth: 345 }} >
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
                    {book.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="info" component={NextLink} href={`/book/${book.id}`} size="small">View</Button>
                  <Button color="warning" size="small" startIcon={<EditIcon />}>Edit</Button>
                  <Button color="error" size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(book.id)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </Box >
  );
}

