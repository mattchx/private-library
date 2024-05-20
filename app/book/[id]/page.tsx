"use client"
import { useState } from 'react'
import { Button, Card, CardContent, CardActionArea, CardActions, Container, CardMedia, Typography, Box, CircularProgress, Alert, Modal, Dialog } from '@mui/material'
import { api, useBooks } from '../../api'
import { EditBookForm } from '../../ui/book-form'
import { Book } from '../../../lib/types'
import { useRouter } from 'next/navigation'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBack from '@mui/icons-material/ArrowBack'

interface BookDetailsProps {
  params: { id: string };
}

export default function BookDetails({ params }: BookDetailsProps) {

  const { books, isLoading, isError, mutate } = useBooks()
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const book = books?.find((book: Book) => book.id.toString() === params.id)

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <EditBookForm book={book} />
      </Dialog>
      <Container maxWidth="md">
        <Card variant="outlined">
          <CardMedia
            sx={{ height: 500 }}
            image="https://m.media-amazon.com/images/I/7173a8decnL._SL1500_.jpg"
            title="book image placeholder"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by {book.author}
            </Typography>
            <Typography variant="body2">
              Genre: {book.genre}
            </Typography>
            <Typography variant="body2">
              Description: {book.description}
            </Typography>
            <CardActions>
              <Button color="warning" startIcon={<EditIcon />} onClick={handleClickOpen} fullWidth>Edit</Button>
              <Button color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(book.id)} fullWidth>Delete</Button>
            </CardActions>
          </CardContent>
        </Card>
        <Button color="secondary" startIcon={<ArrowBack />} variant="outlined" onClick={() => router.back()}>Go Back</Button>
      </Container>
    </>
  )
}
