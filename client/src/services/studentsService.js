import sessionDetails from "../testData/sessionDetails";

const allStudents = () => {
  return sessionDetails.students.map(s => s.student).filter(s => s.active);
};

export { allStudents };
