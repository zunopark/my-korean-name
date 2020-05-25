const resultContent = document.querySelector(`.content`);
const loading = document.querySelector(`.loading-wrap`);

function addBlock(e) {
  e.classList.add("displayBlock");
}
function removeBlock(e) {
  e.classList.remove("displayBlock");
}
function init() {
  setTimeout(function () {
    resultContent.classList.remove("displayBlock");
  }, 2500);
  setTimeout(function () {
    loading.classList.add("displayBlock");
  }, 2500);
}

if (resultContent) {
  init();
}
