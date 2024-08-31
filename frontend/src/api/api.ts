import axios from 'axios';
import { Note } from '../types/Note';

const API_URL = 'http://localhost:4000/api/notes';

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createNote = async (title: string, content: string): Promise<Note> => {
  const response = await axios.post(API_URL, { title, content });
  return response.data;
};

export const deleteNote = async (id: number): Promise<number> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response ? id : 0;
};
