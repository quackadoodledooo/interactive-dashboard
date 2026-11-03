const displayTime = () => {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let calendar = date.toLocaleDateString();

    let session = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours-12 : hours;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const clockFace = document.getElementById("clock-face");
    const calendarDate = document.getElementById("calendar-date");
    const time = hours + ":" + minutes + ":" + seconds + " " + session;
    clockFace.innerHTML = time;
    calendarDate.innerHTML = calendar;
}

setInterval(displayTime, 1000);
displayTime();