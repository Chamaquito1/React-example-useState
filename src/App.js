import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import  './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <h1>Registro de Estudiantes</h1>
      <StudentForm addStudent={addStudent} />
      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
