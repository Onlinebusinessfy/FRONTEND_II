import StudentCard from "./StudentCard";

function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <h2>No students registered yet.</h2>
    );
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;