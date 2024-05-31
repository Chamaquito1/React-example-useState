import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !grade) return;
    addStudent({ name, subject, grade });
    setName('');
    setSubject('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Materia"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calificación"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default StudentForm;
