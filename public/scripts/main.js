const endingDate = new Date("1 June, 2021 00:00:00").getTime();

const getTimeLeft = ({ endingDate, currentTime }) => {
  return endingDate - currentTime;
};

const calculateTimeLeft = () => {
  const currentTime = new Date().getTime();
  const timeLeft = getTimeLeft({ endingDate, currentTime });

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const daysLeft = Math.floor(timeLeft / day);
  const hoursLeft = Math.floor((timeLeft % day) / hour);
  const minutesLeft = Math.floor((timeLeft % hour) / minute);
  const secondsLeft = Math.floor((timeLeft % minute) / second);

  document.querySelector(".time-days").innerHTML = daysLeft;
  document.querySelector(".time-hours").innerHTML = hoursLeft;
  document.querySelector(".time-minutes").innerHTML = minutesLeft;
  document.querySelector(".time-seconds").innerHTML = secondsLeft;
};

setInterval(calculateTimeLeft, 1000);
