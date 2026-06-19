import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("React");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Student name is required");
      return;
    }

    const numericGrade = Number(grade);

    if (
      numericGrade < 0 ||
      numericGrade > 100 ||
      grade === ""
    ) {
      alert("Grade must be between 0 and 100");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      course,
      grade: numericGrade,
    };

    onAddStudent(newStudent);

    setName("");
    setCourse("React");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
        <option value="HTML/CSS">HTML/CSS</option>
      </select>

      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;