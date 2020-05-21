import {
  yearFemaleStorage,
  yearMaleStorage,
  monthStorage,
  dayStorage,
} from "./storage";

const result = document.querySelector(`#jsResultDate`);
const koreanName = document.querySelector(`#jsKoreanName`);

function init() {
  const splitResult = result.innerHTML.split("/");
  const dayResult = parseInt(splitResult[0]);
  const monthResult = parseInt(splitResult[1]);
  const yearResult = parseInt(splitResult[2]);
  console.log(monthResult, dayResult, yearResult);
  const first = monthStorage[monthResult - 1];
  const second = dayStorage[dayResult - 1];
  if (splitResult[3] === "male") {
    const third = yearMaleStorage[yearResult % 10];
    koreanName.innerHTML = `${first}${second}${third} 입니다.`;
  } else {
    const third = yearFemaleStorage[yearResult % 10];
    koreanName.innerHTML = `${first}${second}${third} 입니다.`;
  }
}

if (result) {
  init();
}
