import { timeZoneStr } from "./util/helpers";

export const forClock = (element) => {
    let cachedTimeZoneStr = null;
    const updateClock = () => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        if (cachedTimeZoneStr === null) {
            cachedTimeZoneStr = timeZoneStr();
        }
        let str = `It is ${hours} ${hours === "01" ? "hour" : "hours"}, ${minutes} ${minutes === "01" ? "minute and " : "minutes and "}${seconds} ${seconds === "01" ? "second" : "seconds"} in ${cachedTimeZoneStr}`;
        element.textContent = str;
    };

    updateClock();
    requestAnimationFrame(updateClock);
}


export const timeIsRunning = (percent) => {
    const update = () => {
        const now = new Date();
        const time = {
            hours: now.getHours(),
            minutes: now.getMinutes(),
        };
        const legitDaytime = time.hours >= 8 && time.hours <= 23;

        if (legitDaytime) {
            let helper = time.hours - 8 + time.minutes / 60;
            let timePassed = helper / 15;
            percent.textContent = (timePassed * 100).toFixed(0) + "% of the day has already passed. Go code 🫡";
        } else {
            percent.textContent = "My extra gigachad algorithm tells me that it's not daytime now. Go to sleep or you will feel like shit 💩";
        }
    }
    update();
    requestAnimationFrame(update);
}