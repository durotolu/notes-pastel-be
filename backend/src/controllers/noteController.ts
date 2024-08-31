import { Request, Response } from 'express';
import { openDb } from '../database/sqlite';
import { Note } from '../models/note';

export const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const db = await openDb();
  const result = await db.run('INSERT INTO notes (title, content, timestamp) VALUES (?, ?, ?)', [
    title, content, new Date().toISOString()
  ]);
  res.status(201).json({ id: result.lastID, title, content });
};

export const getNotes = async (req: Request, res: Response) => {
  const db = await openDb();
  const notes: Note[] = await db.all('SELECT * FROM notes');
  res.json(notes);
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await openDb();
  await db.run('DELETE FROM notes WHERE id = ?', [id]);
  res.status(204).end();
};
