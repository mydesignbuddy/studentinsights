import React, { useGlobal } from "reactn";
import Grid from "@material-ui/core/Grid";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";
// import attendanceService from "../services/attendanceService";
import { gradesByStudents } from "../services/gradesService";
// import { allStudents } from "../services/studentsService";

ReactChartkick.addAdapter(Chart);

export default () => {
  const [authToken] = useGlobal("authToken");
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <pre>{JSON.stringify(gradesByStudents(), null, 2)}</pre>
      </Grid>
      <Grid item xs={12}>
        Dashboad here {authToken}
      </Grid>
      <Grid item xs={12}>
        <LineChart
          data={{
            "2017-05-13": 2,
            "2017-05-14": 5,
            "2017-05-15": 7,
            "2017-05-16": 13,
            "2017-05-17": 5,
            "2017-05-18": 20
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </Grid>
    </Grid>
  );
};
