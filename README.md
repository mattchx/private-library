# Private Library

This project is a full-stack library management application designed to help users easily add, view, edit, and delete books from their collection. It's built with modern technologies like Next.js, SWR, TypeScript, Axios, Formik, and Material UI (MUI) for a robust and user-friendly experience.

<img width="500" alt="Screenshot 2024-05-22 at 12 21 38 PM" src="https://github.com/mattchx/private-library/assets/55170649/c2d64fd6-bdb9-4072-b084-fab1d90a695a">

## Features

- **Add New Books:** Easily input book details (title, author, genre, description) through a form.
- **View Book List:** See a clear list of all books in your library.
- **Edit Book Details:** Update any book's information with a seamless editing experience.
- **Delete Books:** Remove books from your collection when needed.
- **Form Validation:** Uses Formik and Yup for user-friendly form validation.
- **Data Fetching & Caching:** Leverages SWR for efficient data fetching and caching from the server.
- **UI with MUI:** Employs Material UI components for a polished and responsive interface.
- **TypeScript:** Written entirely in TypeScript for improved type safety and maintainability.

## Technologies Used
    - Next.js (App Router)
    - React.js
    - TypeScript
    - SWR (Data Fetching)
    - Axios (HTTP Requests)
    - Formik (Form Management)
    - Yup (Schema Validation)
    - Material UI (MUI 5)

## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/mattchx/private-library.git)
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
5.  **Open the App:**
    Navigate to `http://localhost:3000` in your browser.

- **Note**: This application requires a backend server to function properly. Contact me for more information.

## Project Structure Overview

- `app/`: Main application components and routes (using Next.js's App Router)
  - `ui/`: Reusable UI components (BookForm, BookList, etc.)
  - `dashboard/`: Main application layout.
  - `book/`: UI for individual cook view.
  - `api/`: Axios and SWR data fetching setup.  
- `lib/`: Utility functions and type definitions.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

## App Photos
<img width="500" alt="Screenshot 2024-05-22 at 12 22 00 PM" src="https://github.com/mattchx/private-library/assets/55170649/fe17a631-e367-4499-aa2b-6320fb927835">
<img width="500" alt="Screenshot 2024-05-22 at 12 23 18 PM" src="https://github.com/mattchx/private-library/assets/55170649/4949cf8c-76fa-4a64-8e34-1a4646f7f17a">
<img width="500" alt="Screenshot 2024-05-22 at 12 23 33 PM" src="https://github.com/mattchx/private-library/assets/55170649/d5b920df-007b-451d-9708-46908d50f65a">
<img width="500" alt="Screenshot 2024-05-22 at 12 23 45 PM" src="https://github.com/mattchx/private-library/assets/55170649/de90b40a-6521-45fc-b1ae-7abcc2112ea5">
