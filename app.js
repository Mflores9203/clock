const secondsHandle = document.querySelector(".handle__seconds");
const minutesHandle = document.querySelector(".handle__minutes");
const hoursHandle = document.querySelector(".handle__hours");

setInterval(() => {
    setHandles()
}, 1000)

function setHandles() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const hoursAngleDynamic = minutes * 0.5;
  const hoursAngle = hours * 30 + hoursAngleDynamic;
  const minutesAngleDynamic = seconds * 0.1;
  const minutesAngle = minutes * 6 + minutesAngleDynamic;
  
  console.log(d, seconds, minutes, hours);

  hoursHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minutesHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  secondsHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}
