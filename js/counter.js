// Set the date we're counting down to
let countDownDate = new Date("November 2, 2022 00:00:00").getTime();

function Counter() {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  if (days < 10) {
    let days = "0" + Math.floor(distance / (1000 * 60 * 60 * 24));
  }
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) {
    let hours =
      "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes < 10) {
    let minutes = "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  }
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (seconds < 10) {
    let seconds = "0" + Math.floor((distance % (1000 * 60)) / 1000);
  }

  // Output the result in an element with id="demo"

  document.getElementById("dni").innerHTML = days;
  document.getElementById("godziny").innerHTML = hours;
  document.getElementById("minuty").innerHTML = minutes;
  document.getElementById("sekundy").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
Counter();
// Update the count down every 1 second
let x = setInterval(Counter, 1000);
