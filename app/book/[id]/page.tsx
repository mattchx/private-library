"use client"
import { useState } from 'react'
import { Card, CardContent, CardActionArea, CardMedia, Typography, Button, Box, CircularProgress, Alert, Modal, Dialog } from '@mui/material'
import { useBooks } from '../../api'
import BookForm from '../../ui/book-form'
import { Book } from '../../../lib/types'


interface BookDetailsProps {
  // book: Book;
  onEdit: () => void;
  params: { id: string };
}


export default function BookDetails({ params, onEdit }: BookDetailsProps) {

  const { books, isLoading, isError } = useBooks()
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) return <Box display="flex" justifyContent="center"><CircularProgress color="secondary" /></Box>
  if (isError) return <Box display="flex" justifyContent="center"><Alert severity="error">There was a error fetching your books...</Alert></Box>

  const book = books.find((book: Book) => book.id.toString() === params.id)

  return (
    <>
      <Dialog open={open}
        onClose={handleClose}>
        <BookForm book={book} />
      </Dialog>
      <Card variant="outlined">
        <CardMedia
          sx={{ height: 140 }}
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
          <Button onClick={handleClickOpen}>Edit</Button>
        </CardContent>
      </Card>
    </>
  )
}
