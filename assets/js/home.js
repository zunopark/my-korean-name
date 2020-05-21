import "./storage";

const form = document.querySelector(`#jsBirth`);
const gender = document.querySelector(`.switch`);

const handleSubmit = (e) => {
  console.dir(e);
};

function init() {
  form.addEventListener("submit", handleSubmit);
}

if (form) {
  init();
}
