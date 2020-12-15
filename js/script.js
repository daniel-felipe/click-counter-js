let button = document.querySelectorAll(".bt")
let output = document.getElementById("output-area")
let clique = 0

button[0].addEventListener("click", () => {
    clique++
    output.innerHTML = clique
})

button[1].addEventListener("click", () => {
    output.innerHTML = clique = 0
})

setInterval(() => {
    if (output.innerHTML.length >= 5)
        output.style.minWidth = "220px"
}, 500)
