import assignments from "../testData/assignments.json";
import grades from "../testData/grades.json";
import { allStudents } from "./studentsService";

const allAssignments = assignments.calendarAssignments.map(a => ({
  effectiveDueDate: a.effectiveDueDate,
  title: a.title,
  required: a.required
}));

export const gradesByAssignments = () => {
  return assignments.calendarAssignments
    .filter(e => e.required)
    .map(a => {
      // return s;
      a.grades = grades.filter(g => g.assignmentTitle === a.title);
      return a;
    });
};

export const gradesByStudents = () => {
  const r = allStudents().map(s => {
    s.grades = grades.filter(
      g => g.studentName === `${s.firstName} ${s.lastName}`
    );
    s.grades = s.grades
      .map(g => {
        g.assignment = allAssignments.filter(
          x => x.title === g.assignmentTitle
        )[0];
        return g;
      })
      .filter(g => {
        const todaysDate = new Date();
        if (
          new Date(g.assignment.effectiveDueDate).setHours(0, 0, 0, 0) <
            todaysDate.setHours(0, 0, 0, 0) &&
          g.assignment.required
        ) {
          return true;
        }
        return false;
      });
    return s;
  });

  return r;
};
