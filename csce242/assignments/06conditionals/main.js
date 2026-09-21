/* shows exercise 1 and hides exercise 2 */
document.getElementById("exercise-1").onclick = (e) => {
    document.getElementById("missing-section").classList.remove("hidden");
    document.getElementById("counter-section").classList.add("hidden");
};

/* shows exercise 2 and hides exercise 1 */
document.getElementById("exercise-2").onclick = (e) => {
    document.getElementById("counter-section").classList.remove("hidden");
    document.getElementById("missing-section").classList.add("hidden");
};

/* toggles the nav menu on small screens */
document.getElementById("toggle-nav").onclick = () => {
    const navList = document.querySelector("#main-nav ul");
    const navArrow = document.getElementById("nav-arrow");
    navList.classList.toggle("hide-small");
};

/* calculates attendance points lost */
document.getElementById("txt-days").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);
    const deductionMessage = document.getElementById("deduction-message");
    const attendanceWorth = 7;
    const totalClasses = 25;
    const pointsPerClass = attendanceWorth / totalClasses;

    if(isNaN(daysMissed) || daysMissed < 0){
        deductionMessage.innerHTML = "";
    } else {
        const pointsLost = daysMissed * pointsPerClass;

        if(daysMissed === 0){
            deductionMessage.innerHTML = "Nice! You will not lose any attendance points.";
        } else if(daysMissed <= 2){
            deductionMessage.innerHTML = `You will lose about ${pointsLost.toFixed(2)}% of your final grade. Try not to miss more class.`;
        } else if(daysMissed <= 5){
            deductionMessage.innerHTML = `You will lose about ${pointsLost.toFixed(2)}% of your final grade. Attendance points add up quickly.`;
        } else if(daysMissed <= 10){
            deductionMessage.innerHTML = `You will lose about ${pointsLost.toFixed(2)}% of your final grade. Make sure you can catch up on missed work.`;
        } else {
            deductionMessage.innerHTML = `You will lose about ${pointsLost.toFixed(2)}% of your final grade. You should reconsider missing this many classes.`;
        }
    }
};

/* Calculates days until December 4th */
const today = new Date();

const lastDayOfClass = new Date(today.getFullYear(), 11, 4);

const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const millisecondsLeft = lastDayOfClass - todayAtMidnight;

const daysLeft = Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24));

if(daysLeft < 0){
    document.getElementById("counter-message").innerHTML = "The semester is over. WOOOOHOOOOO";
} else {
    document.getElementById("counter-message").innerHTML = `You have ${daysLeft} day(s) left in the semester.`;

    if(daysLeft <= 7){
        document.getElementById("semester-message").innerHTML = "SOOOOO CLOSE ALMOST THERE!!";
    } else if(daysLeft <= 30){
        document.getElementById("semester-message").innerHTML = "One more month left, keep going bruv.";
    } else if(daysLeft <= 90){
        document.getElementById("semester-message").innerHTML = "Still got some time, don't even worry about it.";
    } else {
        document.getElementById("semester-message").innerHTML = "Way too early to think about this.";
    }
}