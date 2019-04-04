// Set the date we're counting down to
const countDownDate = new Date("May 6, 2019 18:00:00").getTime();

// Update the count down every 1 second
let countdownfunction = setInterval(function() {
    // Delay between now an the count down date
    let delay = countDownDate - new Date().getTime();
    delay = delay / 1000.;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(delay / (60 * 60 * 24));
    let hours = Math.floor((delay % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((delay % (60 * 60)) / 60);
    let seconds = Math.floor(delay % 60);
    // Output the result in an element with id="demo"
    document.querySelector("#days .digit").innerHTML = days.toString();
    document.querySelector("#hours .digit").innerHTML = hours.toString();
    document.querySelector("#minutes .digit").innerHTML = minutes.toString();
    document.querySelector("#seconds .digit").innerHTML = seconds.toString();
    // If the count down is over, write some text
    if (delay < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "En retard !";
    }
}, 1000);