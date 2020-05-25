import routes from "../routes";
import {
  yearFemaleStorage,
  yearMaleStorage,
  monthStorage,
  dayStorage,
} from "../storage/storage";

export const homeCon = (req, res) => {
  console.log(`home`);
  res.render("home", { pageTitle: "HOME" });
};

export const submitCon = (req, res) => {
  const {
    body: { month, day, year, gender },
  } = req;

  if (month < 13 && day <= 31 && year > 1900) {
    try {
      console.log(month, day, year, gender);
      const first = monthStorage[parseInt(month)];
      const second = dayStorage[parseInt(day)];
      let third = "";
      if (gender === `male`) {
        third = yearMaleStorage[parseInt(year) % 10];
      } else {
        third = yearFemaleStorage[parseInt(year) % 10];
      }

      const pronunciation = `${first[1]} ${second[2]} ${third[2]}`;
      const description = `${second[1]} ${third[1]}`;
      const name = `${first[0]}${second[0]}${third[0]}`;
      res.render("result", {
        pageTitle: "YOUR NAME",
        name,
        description,
        pronunciation,
      });
    } catch (error) {
      console.log(error);
      res.render("home", { pageTitle: "HOME" });
    }
  } else {
    console.log("no!");
    res.render("error", { pageTitle: "ERROR" });
  }
};

export const resultCon = (req, res) => {};
