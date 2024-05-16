import { Container, CssBaseline, Button} from '@mui/material';
import BookForm from '../ui/book-form'

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <Container>

        <h1>Home</h1>
      
        <BookForm />
      </Container>
    </main>
  );
}
