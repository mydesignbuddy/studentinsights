import React, { useGlobal } from "reactn";
import Grid from "@material-ui/core/Grid";
import { HorizontalBar } from "react-chartjs-2";
import { gradeToValue, gradeToValueArr, averageMeanGrade } from "../utils";
// import attendanceService from "../services/attendanceService";
import { gradesByStudents } from "../services/gradesService";
// import { allStudents } from "../services/studentsService";

const incompleteAssignments = gradesByStudents().map(s => {
  let count = 0;
  s.grades.forEach(g => {
    if (
      g.submitted === false &&
      gradeToValue(g.grade) < gradeToValueArr["F-"]
    ) {
      // did not submit // incomplete
      count++;
    }
  });
  return count;
});

const gradeAvgs = gradesByStudents().map(s => [
  gradeToValue(
    averageMeanGrade(s.grades.map(g => g.grade).filter(g => g !== null))
  )
]);

const studentNames = gradesByStudents().map(s => [
  `${s.firstName} ${s.lastName}`
]);

const barChartDataSet = {
  datasets: [
    {
      label: "Grade Average",
      borderWidth: 1,
      backgroundColor: "#00b711",
      data: gradeAvgs
    },
    {
      label: "Incompletes",
      borderWidth: 1,
      backgroundColor: "#FF0000",
      data: incompleteAssignments
    }
  ],
  labels: studentNames
};

export default () => {
  const [authToken] = useGlobal("authToken");
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <HorizontalBar
          data={barChartDataSet}
          /*options={{
            scaleShowValues: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    autoSkip: false
                  }
                }
              ]
            }
          }}*/
        />
      </Grid>
      <Grid item xs={12}>
        <pre>{JSON.stringify(gradesByStudents(), null, 2)}</pre>
      </Grid>
      <Grid item xs={12}>
        Dashboad here {authToken}
      </Grid>
    </Grid>
  );
};
