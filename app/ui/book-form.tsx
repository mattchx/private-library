"use client"

import { useState } from 'react';
import { Alert, Button, Chip, Container, TextField, Stack, Box, Typography, } from '@mui/material';
import { useFormik } from 'formik';
import { Book } from "../../lib/types";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
  description: Yup.string()
});

export default function BookForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: ""
    } as Book,
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      alert(JSON.stringify(values, null, 2));
      setSuccessMessage("Your book has been successfully added")
    }
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add a book:
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

          <Button color="secondary" variant="contained" type='submit'>Submit</Button>
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
        </Stack>
      </form>
    </Container>
  )
}