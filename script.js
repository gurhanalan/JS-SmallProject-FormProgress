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
