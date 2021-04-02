import { getTime } from "./utils/getTime.js";

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");

const cache = {};

const updateClock = () => {
    const [hour, minute] = getTime();

    if (cache[hour] !== hour) {
        cache[hour] = hour;
        hourElement.innerText = hour;
    }
    if (cache[minute] !== minute) {
        cache[minute] = minute;
        minuteElement.innerText = minute;
    }
};

updateClock();

setInterval(updateClock, 1000);
