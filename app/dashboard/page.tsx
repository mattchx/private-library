import { Container, CssBaseline, Card } from "@mui/material";
import { AddBookForm } from "../ui/book-form";
import BookList from "../ui/book-list";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <Container>
        <h1>Home</h1>

        <BookList />
        <AddBookForm />
      </Container>
    </main>
  );
}
