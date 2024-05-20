"use client"

import { useState } from 'react';
import { Alert, Button, Card, CardContent, Container, TextField, Stack, Box, Typography, Link } from '@mui/material';
import { useFormik } from 'formik';
import { Book } from "../../lib/types";
import * as Yup from 'yup';
import { api, useBooks } from '../api';

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
  description: Yup.string()
});

interface BookFormProps {
  book?: Book; // Optional book object for editing
  onCancel?: () => void; // Optional cancel callback
}

function BookForm({ book, onCancel }: BookFormProps) {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { mutate } = useBooks()

  const formik = useFormik({
    initialValues: book || {
      title: "",
      author: "",
      genre: "",
      description: ""
    } as Book,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (book) {
          // Edit mode: Update existing book
          await api.put(`/books/${book.id}`, values);
          setSuccessMessage("Book updated successfully!");
        } else {
          // Add mode: Create new book
          await api.post("/books", values);
          setSuccessMessage("Book successfully added to library!");
        }

        mutate();
        resetForm();
        setTimeout(() => {
          setSuccessMessage(null)
          onCancel?.(); // Call the cancel callback if provided (in edit mode)
        }, 3000)

      } catch (error) {
        console.error("Error adding/updating book:", error);
      }
    }
  });

  return (
    <CardContent id="add-book-form">
      {successMessage && <Alert variant="filled" severity="success" sx={{mb: 2}}>{successMessage}</Alert>}
      <Typography variant="h4" gutterBottom>
        {book ? "Edit Book" : <Link href="#add-book-form">Add a book:</Link>}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            variant="outlined"
            {...formik.getFieldProps("title")}
          />
          <TextField
            fullWidth
            id="author"
            label="Author"
            variant="outlined"
            {...formik.getFieldProps("author")}
          />
          <TextField
            fullWidth
            id="genre"
            label="Genre"
            variant="outlined"
            {...formik.getFieldProps("genre")}
          />
          <TextField
            fullWidth
            id="description"
            label="Description"
            variant="outlined"
            {...formik.getFieldProps("description")}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="submit" color="secondary" variant="contained">
              {book ? "Update Book" : "Add Book"}
            </Button>
            {onCancel && (
              <Button color="error" variant="contained" onClick={onCancel}>Cancel</Button>
            )}
          </Box>
        </Stack>
      </form>
    </CardContent>

  );
}

export function AddBookForm() {
  return (
    <Box marginBottom={10}>
      <Container maxWidth="sm">
        <Card>
          <BookForm />
        </Card>
      </Container>
    </Box>
  )
}

export function EditBookForm({ book, onCancel }: BookFormProps) {
  return <Card><BookForm book={book} onCancel={onCancel} /></Card>
}
