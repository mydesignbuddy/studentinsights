import attendance from "../testData/attendance.json";
import sessions from "../testData/sessions.json";

export default () => {
  return sessions.calendarSessions
    .filter(e => e.eventType.code === "academic")
    .map(s => {
      s.session.attendance = attendance.filter(
        a => a.sessionName === s.session.name && !a.pending
      );
      return s.session;
    });
};
