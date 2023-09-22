const fullDarkModeCheckBox = document.querySelector("#full-dark-mode");
const containedDarkModeCheckBox = document.querySelector(
  "#contained-dark-mode"
);
const container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem("fullDarkModeCheckBox"));
const isContainedDarkMode = JSON.parse(
  localStorage.getItem("containedDarkModeCheckBox")
);

if (isFullDarkMode) {
  fullDarkModeCheckBox.checked = true;
}
if (isContainedDarkMode) {
  containedDarkModeCheckBox.checked = true;
}

changeFullDarkMode();
changeContainedDarkMode();

fullDarkModeCheckBox.addEventListener("change", (e) => {
  changeFullDarkMode();
  changeContainedDarkMode();
});

function changeFullDarkMode() {
  if (fullDarkModeCheckBox.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("fullDarkModeCheckBox", true);
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("fullDarkModeCheckBox", false);
  }
  
}

function changeContainedDarkMode() {
  if (containedDarkModeCheckBox.checked) {
    container.classList.add("dark");
    localStorage.setItem("containedDarkModeCheckBox", true);
  } else {
    container.classList.remove("dark");
    localStorage.setItem("containedDarkModeCheckBox", false);
  }
}


containedDarkModeCheckBox.addEventListener("change", changeContainedDarkMode);
