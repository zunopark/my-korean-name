import routes from "../routes";

export const homeCon = (req, res) => {
  console.log(`home`);
  res.render("home", { pageTitle: "HOME" });
};

export const submitCon = (req, res) => {
  const {
    body: { month, day, year, gender },
  } = req;
  console.log(month, day, year, gender);
  res.render("result", { pageTitle: "YOUR NAME", month, day, year, gender });
};

export const resultCon = (req, res) => {
  console.log(`result`);
  res.render("result", { pageTitle: "YOUR NAME" });
};
