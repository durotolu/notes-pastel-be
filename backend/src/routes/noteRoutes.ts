import { Router } from 'express';
import { createNote, getNotes, deleteNote } from '../controllers/noteController';

const router = Router();

router.post('/notes', createNote);
router.get('/notes', getNotes);
router.delete('/notes/:id', deleteNote);

export default router;
