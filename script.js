const counter = document.getElementById('counter');
const counterContainer = document.getElementById('counter-container');
const [image] = document.getElementsByTagName("img");

let now = new Date();
const dateTravel = new Date(2023, 0, 1, 0, 0, 0, 0);

const oneDayMillisecond = 86400000;
const oneHourMillisecond = 3600000;
const oneMinuteMillisecond = 60000;
const oneSecondMillisecond = 1000;

const putTwoAlgarisms = (numb) => {
  return numb < 10 ? `0${numb}`:numb;
}

const func = () => {
  const isAfterTravel = now > dateTravel;
  let timeDiffMilliseconds = isAfterTravel ? 0:-(now - dateTravel);
  
  const days = Math.floor(timeDiffMilliseconds / oneDayMillisecond);
  timeDiffMilliseconds -= (days * oneDayMillisecond);

  const hours = Math.floor(timeDiffMilliseconds / oneHourMillisecond);
  timeDiffMilliseconds -= (hours * oneHourMillisecond);

  const minutes = Math.floor(timeDiffMilliseconds / oneMinuteMillisecond);
  timeDiffMilliseconds -= (minutes * oneMinuteMillisecond);

  const seconds = Math.floor(timeDiffMilliseconds / oneSecondMillisecond);
  timeDiffMilliseconds -= (seconds * oneSecondMillisecond);

  counter.innerText = `Faltam ${days} dias ${putTwoAlgarisms(hours)}:${putTwoAlgarisms(minutes)}:${putTwoAlgarisms(seconds)}`;
  
  now.setSeconds(now.getSeconds() + 1);

  if(isAfterTravel) {
    counterContainer.style.backgroundColor = "green";
    image.src = "tina.jpeg";
    image.alt = "Tina de cabeça pra baixo";
  } else setTimeout(func,1000);
};

func();

const firstLote = document.getElementById("first");
const dateFirstLote = new Date(2022, 9, 14);
if (now > dateFirstLote) firstLote.style.textDecoration = "line-through";

const secondLote = document.getElementById("second");
const dateSecondLote = new Date(2022, 11, 1);
if (now > dateSecondLote) secondLote.style.textDecoration = "line-through";
else secondLote.style.fontWeight = "bold";

const thirdLote = document.getElementById("third");
const dateThirdLote = new Date(2022, 11, 21);
if (now > dateThirdLote) thirdLote.style.textDecoration = "line-through";
else if (now > dateSecondLote) thirdLote.style.fontWeight = "bold";

const forthLote = document.getElementById("forth");
const dateForthLote = new Date(2022, 11, 29);
if (now > dateForthLote) forthLote.style.textDecoration = "line-through";
else if (now > dateThirdLote) forthLote.style.fontWeight = "bold";

const fifthLote = document.getElementById("fifth");
const dateFifthLote = new Date(2022, 11, 31);
if (now > dateFifthLote) fifthLote.style.textDecoration = "line-through";
else if (now > dateForthLote) fifthLote.style.fontWeight = "bold";
