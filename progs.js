const progressLine = document.querySelector(".progress_line"),
    circles = document.querySelectorAll(".circle"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next");

let currentActive = 1;

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    currentActive++;

    if (currentActive > 4) {
        currentActive = 4;
    }
    updateMe();
})

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    updateMe();
})


function updateMe() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    if (currentActive === 4) {
        nextBtn.disabled = true;
    }
    else if (currentActive === 1) {
        prevBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    progressLine.style.width = ((currentActive - 1) / (3) * 90) + "%";

}