function StudentCard({ student, onDelete }) {
  const status =
    student.grade >= 70
      ? "Passed"
      : "Failed";

  return (
    <div className="card">
      <h3>{student.name}</h3>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Grade:</strong> {student.grade}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <button
        onClick={() => onDelete(student.id)}
      >
        Delete Student
      </button>
    </div>
  );
}

export default StudentCard;