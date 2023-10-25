const SayKapil = function () {
  console.log("Kapil Sarkar");
};

setTimeout(SayKapil, 2000);

const headText = document.querySelector(".headText");

const changeText = function () {
  headText.innerHTML = "Best Java Script Series in India by Hitesh Sir";
};
const changeMe = setTimeout(changeText, 2000);

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("STOPPED");
});
