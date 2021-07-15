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
