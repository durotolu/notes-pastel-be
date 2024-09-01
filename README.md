# Notes-Pastel-

This is a full-stack application built with TypeScript that allows users to create, view, and delete notes. The backend is powered by Node.js and Express, and the frontend is built with React. The application uses SQLite as its database.

> Create Notes: Users can create notes with a title and content.

> View Notes: Users can view a list of all notes.

> Delete Notes: Users can delete notes by ID.

> Accordion View: Notes are displayed in an accordion, showing the title by default and the content when expanded.

## Built with npm, React, Material UI and NodeJS

## Install

```sh
git clone https://github.com/your-username/notes-app.git
cd notes-pastel-be
cd .\backend\

npm install
npm frontend-install
```

## Usage

```sh
cd .\backend\
npm install
npm frontend-install
npm run dev
```

Spins up local servers on port 3000 and 4000


Example:

```sh
Server is running on port 4000
Local:     http://localhost:3000
```

## API Endpoints

```sh
POST /notes
- Description: Create a new note.
- Request Body: {
    "title": "Note Title",
    "content": "Note content"
  }
- Response: { "id": 1, "title": "Note Title", "content": "Note content", "timestamp": "2024-01-01T00:00:00Z" }

GET /notes
- Description: Fetch all notes.
- Response: [{
   "id": 1,
   "title": "Note Title",
   "content": "Note content",
   "timestamp": "2024-01-01T00:00:00Z" 
  }]

DELETE /notes/:id
- Description: Delete a note by its ID.
```

## Database Schema

```sh
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT,
  timestamp TEXT
);
```

## License

```sh
This project is licensed under the MIT License.
```

## Author

👤 **Modurotolu Olokode**

- Website: [Modurotolu Olokode](https://www.linkedin.com/in/modurotoluolokode/)
- Github: [durotolu](https://github.com/durotolu)