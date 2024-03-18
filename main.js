const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const confusedBtn = document.getElementById("confused");
const hungryBtn = document.getElementById("hungry");
const angryBtn = document.getElementById("angry");
const checkTheResult = document.getElementById("checkTheResult");
const imageInput = document.getElementById("resultImage");

const happy = ["./src/happy-1.jpg", "./src/happy-2.jpg", "./src/happy-3.jpg"];
const sad = ["./src/sad-1.jpg", "./src/sad-2.jpg", "./src/sad-3.jpg"];
const angry = ["./src/angry-1.jpg", "./src/angry-2.jpg", "./src/angry-3.jpg"];
const confused = [
  "./src/confused-1.jpg",
  "./src/confused-2.jpg",
  "./src/confused-3.jpg",
];
const hungry = [
  "./src/hungry-1.jpg",
  "./src/hungry-2.jpg",
  "./src/hungry-3.jpg",
];

function getRandomHappy() {
  let randomHappy = Math.floor(Math.random() * happy.length);
  return happy[randomHappy];
}

function getRandomSad() {
  let randomSad = Math.floor(Math.random() * sad.length);
  return sad[randomSad];
}

function getRandomAngry() {
  let randomAngry = Math.floor(Math.random() * angry.length);
  return angry[randomAngry];
}

function getRandomConfused() {
  let randomConfused = Math.floor(Math.random() * confused.length);
  return confused[randomConfused];
}

function getRandomHungry() {
  let randomHungry = Math.floor(Math.random() * hungry.length);
  return hungry[randomHungry];
}

checkTheResult.addEventListener("click", () => {
  let imageInputSrc;

  if (happyBtn.checked) {
    imageInputSrc = getRandomHappy();
    document.body.style.backgroundColor = "#F9E897";
    document.body.style.color = "black";
  } else if (sadBtn.checked) {
    imageInputSrc = getRandomSad();
    document.body.style.backgroundColor = "#0766AD";
    document.body.style.color = "white";
  } else if (angryBtn.checked) {
    imageInputSrc = getRandomAngry();
    document.body.style.backgroundColor = "#B80000";
    document.body.style.color = "white";
  } else if (confusedBtn.checked) {
    imageInputSrc = getRandomConfused();
    document.body.style.backgroundColor = "#916DB3";
    document.body.style.color = "white";
  } else if (hungryBtn.checked) {
    imageInputSrc = getRandomHungry();
    document.body.style.backgroundColor = "#7A9D54";
    document.body.style.color = "white";
  } else {
    imageInputSrc = "./src/question-marks.jpeg";
  }
  imageInput.style.display = "block";
  imageInput.src = imageInputSrc;
});

document.getElementsByName("id").forEach((item) => {
  if (item.checked) document.getElementById("btn_submit").disabled = false;
});
