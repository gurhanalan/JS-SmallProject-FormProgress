const labels = document.querySelectorAll(".input-box label");

function addSpans() {
    labels.forEach((label) => {
        label.innerHTML = label.innerText
            .split("")
            .map(
                (letter, index) =>
                    `<span style="transition-delay:${
                        index * 50
                    }ms;">${letter}</span>`
            )
            .join("");
    });
}

addSpans();

// Progress Bars
// Selections

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let step = 0;

function btnDisable() {
    if (step >= 3) {
        btnNext.disabled = true;
    } else if (step <= 0) {
        btnPrev.disabled = true;
    } else {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}

btnNext.addEventListener("click", () => {
    step++;
    document.querySelector(`.bridge-${step}`).classList.add("bridge--active");
    document.querySelector(`.step-${step}`).classList.add("step--active");
    btnDisable();
});

btnPrev.addEventListener("click", () => {
    document
        .querySelector(`.bridge-${step}`)
        .classList.remove("bridge--active");
    document.querySelector(`.step-${step}`).classList.remove("step--active");
    step--;
    btnDisable();
});
btnDisable();

// Sliding content

const contents = document.querySelectorAll(".form-box");
let slideNum = 0;

// FUNCTIONS
function slider(num) {
    contents.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - num)}%)`;
    });
}

slider(0);

function slideRight() {
    slideNum++;
    if (slideNum >= contents.length) {
        slideNum = 0;
    }
    slider(slideNum);
}
function slideLeft() {
    slideNum--;
    if (slideNum < 0) {
        slideNum = contents.length - 1;
    }
    slider(slideNum);
}

btnNext.addEventListener("click", slideRight);

btnPrev.addEventListener("click", slideLeft);

// Form submit
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector(".form");

btnSubmit.addEventListener("click", () => {
    form.submit();
});
