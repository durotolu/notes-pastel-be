import React, { useState } from 'react';
import { Note } from '../types/Note';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import '../styles/NoteAccordion.css'

interface AccordionProps {
  note: Note;
  onDelete: (id: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ note, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(note.id);
  };

  return (
    <MuiAccordion expanded={expanded} onChange={handleExpand}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{note.title}</Typography>
        <IconButton onClick={handleDelete} edge="end">
          <DeleteIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{note.content}</Typography>
        <Typography variant="caption">{note.timestamp}</Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
