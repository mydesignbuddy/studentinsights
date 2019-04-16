export const unique = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

export const gradeToValue = grade => {
  switch (grade) {
    case "A+":
      return 105;
    case "A":
      return 100;
    case "A-":
      return 95;
    case "B+":
      return 90;
    case "B":
      return 85;
    case "B-":
      return 80;
    case "C+":
      return 75;
    case "C":
      return 70;
    case "C-":
      return 65;
    case "D+":
      return 60;
    case "D":
      return 55;
    case "D-":
      return 50;
    case "F+":
      return 45;
    case "F":
      return 40;
    case "F-":
      return 35;
    default:
      return 0;
  }
};

export const gradeToValueArr = {
  "A+": 105,
  A: 100,
  "A-": 95,
  "B+": 90,
  B: 85,
  "B-": 80,
  "C+": 75,
  C: 70,
  "C-": 65,
  "D+": 60,
  D: 55,
  "D-": 50,
  "F+": 45,
  F: 40,
  "F-": 35,
  I: 0,
  Incomplete: 0
};

export const averageMeanGrade = gradeArray => {
  let gradeValueSum = 0;
  gradeArray.forEach(grade => (gradeValueSum += gradeToValue(grade)));

  const mean = Math.round(gradeValueSum / gradeArray.length);
  let nearestWholeNumberByFive = Math.round(mean / 5) * 5;

  if (nearestWholeNumberByFive < 35) {
    nearestWholeNumberByFive = 35;
  }

  let finalAverageGrade = Object.keys(gradeToValueArr).find(
    grade => gradeToValue(grade) === nearestWholeNumberByFive
  );
  if (finalAverageGrade === undefined) {
    finalAverageGrade = "-";
  }
  return finalAverageGrade;
};

export const bcsUrl = path => {
  let url = "https://bootcampspot.com/";
  if (!url.endsWith("/")) {
    url += "/";
  }
  return url + path;
};
