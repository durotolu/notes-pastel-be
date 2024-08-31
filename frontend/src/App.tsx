import React, { useState, useEffect } from 'react';
import { Note } from './types/Note';
import { fetchNotes, createNote, deleteNote } from './api/api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/App.css';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    const notes = await fetchNotes();
    setNotes(notes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAddNote = async (title: string, content: string) => {
    const newNote = await createNote(title, content);
    if (newNote) loadNotes()
  };

  const handleDeleteNote = async (id: number) => {
    const deletedId = await deleteNote(id);
    if (deletedId) loadNotes()
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
