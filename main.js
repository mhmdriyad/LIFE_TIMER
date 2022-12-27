const settingCog = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
let isDoBopen = false;
const initialText = document.getElementById("initialText");
const afterDoB = document.getElementById("afterDoB");
let dateofbirth;
const dobButton = document.getElementById("dobButton");
const yearel = document.getElementById("year");
const monthel = document.getElementById("month");
const daysel = document.getElementById("day");
const hourel = document.getElementById("hour");
const minuteel = document.getElementById("minute");
const secondel = document.getElementById("second");

const makeTwo = (number) => {
  return number > 9 ? number : `0${number}`;
};

const toggleDoB = () => {
  if (isDoBopen) {
    settingContent.classList.add("hide");
  } else {
    settingContent.classList.remove("hide");
  }
  isDoBopen = !isDoBopen;
};

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateofbirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  yearel.innerHTML = makeTwo(year);
  monthel.innerHTML = makeTwo(month);
  daysel.innerHTML = makeTwo(day);
  hourel.innerHTML = makeTwo(hour);
  minuteel.innerHTML = makeTwo(minute);
  secondel.innerHTML = makeTwo(second);
};

const setDoBhand = () => {
  const dateString = dobInput.value;
  dateofbirth = dateString ? new Date(dateString) : null;

  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");
  if (year && month && date) {
    dateofbirth = new Date(year, month, date);
  }

  if (dateofbirth) {
    localStorage.setItem("year", dateofbirth.getFullYear());
    localStorage.setItem("month", dateofbirth.getMonth());
    localStorage.setItem("date", dateofbirth.getDate());

    initialText.classList.add("hide");
    afterDoB.classList.remove("hide");
    setInterval(() => updateAge(), 1000);
  } else {
    afterDoB.classList.add("hide");
    initialText.classList.remove("hide");
  }
  console.log(dateofbirth);
};

setDoBhand();
settingCog.addEventListener("click", toggleDoB);
dobButton.addEventListener("click", setDoBhand);
