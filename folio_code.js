
var countDownDate = new Date("2023-06-01").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerHTML = days + " days until the deadline.";
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The deadline has passed.";
}
}, 1000);


