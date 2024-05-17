"use client";

import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CardActions, CardMedia, Container, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Book } from "../../lib/types";
import { api, useBooks } from '../api';

export default function BookList() {
  const {books,isLoading, isError, mutate} = useBooks()

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/books/${id}`);
      mutate();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
        <Container>
        <Grid container spacing={4}>
          {books?.map((book) => (
            <Grid item xs={6}>
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
                  <Button color="warning" size="small" startIcon={<EditIcon />}>Edit</Button>
                  <Button color="error" size="small" startIcon={<DeleteIcon />} onClick={() => handleDelete(book.id)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
    </Box >
  );
}