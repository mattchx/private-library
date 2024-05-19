import { Container, CssBaseline, Button} from '@mui/material';
import AddBookForm from '../ui/add-book-form'
import BookList from '../ui/book-list'


export default function Home() {
  return (
    <main>
      <CssBaseline />
      <Container>

        <h1>Home</h1>

       <BookList /> 

        <AddBookForm />
        {/* <BookForm type="add" /> */}
      </Container>
    </main>
  );
}
