import { useState } from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";

function Homepage() {
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
    setIsFormOpen(false);
  };

  const handleEditNote = (note) => {
    setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    setEditingNote(null);
    setIsFormOpen(false);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddClick={() => setIsFormOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        {isFormOpen && (
          <NoteForm
            onSubmit={editingNote ? handleEditNote : handleAddNote}
            onClose={() => {
              setIsFormOpen(false);
              setEditingNote(null);
            }}
            note={editingNote}
          />
        )}
        <NoteList
          notes={notes}
          onEdit={(note) => {
            setEditingNote(note);
            setIsFormOpen(true);
          }}
          onDelete={handleDeleteNote}
        />
      </main>
    </div>
  );
}

export default Homepage;
