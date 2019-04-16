import assignments from "../testData/assignments.json";
import grades from "../testData/grades.json";
import { allStudents } from "./studentsService";

const gradesByAssignments = () => {
  return assignments.calendarAssignments
    .filter(e => e.required)
    .map(a => {
      // return s;
      a.grades = grades.filter(g => g.assignmentTitle === a.title);
      return a;
    });
};

const gradesByStudents = () => {
  const r = allStudents().map(s => {
    s.grades = grades.filter(
      g => g.studentName === `${s.firstName} ${s.lastName}`
    );
    return s;
  });

  return r;
};

export { gradesByAssignments, gradesByStudents };
