import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Materia:</strong> {student.subject}</p>
      <p><strong>Calificación:</strong> {student.grade}</p>
    </div>
  );
};

export default StudentCard;
