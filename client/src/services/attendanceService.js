import attendance from "../testData/attendance.json";
import sessions from "../testData/sessions.json";
import { allStudents } from "./studentsService";
import { unique } from "../utils";

const students = allStudents();

export const sessionAttendance = sessions.calendarSessions
  .filter(
    e =>
      e.eventType.code === "academic" &&
      new Date(e.session.endTime) < new Date()
  )
  .map(s => {
    s.session.attendance = attendance.filter(
      a => a.sessionName === s.session.name && !a.pending
    );
    return s.session;
  });

export const studentAttendance = () => {
  return students.map(s => {
    let abscentCount = 0;
    let remoteCount = 0;
    sessionAttendance.forEach(sa => {
      // need to remove duplicates that come back from BCS API
      const attendanceArr = sa.attendance.map(a => ({
        ...a,
        uniqueKey: `${a.studentName}||${a.sessionName}`
      }));
      debugger;
      unique(attendanceArr, "uniqueKey").forEach(saa => {
        if (saa.studentName === `${s.firstName} ${s.lastName}`) {
          if (saa.remote) {
            remoteCount++;
          } else if (!saa.present) {
            abscentCount++;
          }
        }
      });
    });
    return {
      student: `${s.firstName} ${s.lastName}`,
      abscentCount,
      remoteCount
    };
  });
};
