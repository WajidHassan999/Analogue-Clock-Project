setInterval(() => {
d = new Date();
hrTime = d.getHours();
minTime = d.getMinutes();
secTime = d.getSeconds();
hrotation = 30*hrTime + minTime/2;
minrotation = 6*minTime;
secrotation = 6*secTime;
hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${minrotation}deg)`;
second.style.transform = `rotate(${secrotation}deg)`;
}, 1000);