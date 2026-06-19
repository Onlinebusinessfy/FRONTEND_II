import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "Passed") return student.grade >= 70;
    if (filter === "Failed") return student.grade < 70;
    return true;
  });

  const average =
    students.length > 0
      ? (
          students.reduce(
            (sum, student) => sum + student.grade,
            0
          ) / students.length
        ).toFixed(1)
      : 0;

  return (
    <div className="container">
      <h1>Student Grade Manager</h1>

      <StudentForm onAddStudent={addStudent} />

      <div className="stats">
        <h3>Total students: {students.length}</h3>
        <h3>Class average: {average}</h3>
      </div>

      <div className="filter">
        <label>Filter: </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Passed">Passed</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;