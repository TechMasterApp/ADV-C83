canvas = document.getElementById("myCanvas")
pencil = canvas.getContext("2d")
var lpox, lpoy

canvas.addEventListener("touchstart", ts)
function ts(e) {
    lpox = e.touches[0].clientX - canvas.offsetLeft
    lpoy = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", tm)
function tm(e) {
    color = document.getElementById("color").value
    linewidth = document.getElementById("lineWidth").value
    cpox = e.touches[0].clientX - canvas.offsetLeft
    cpoy = e.touches[0].clientY - canvas.offsetTop
    pencil.beginPath()
    pencil.strokeStyle = color
    pencil.lineWidth = linewidth
    pencil.moveTo(lpox, lpoy)
    pencil.lineTo(cpox, cpoy)
    pencil.stroke()
    lpox = cpox
    lpoy = cpoy
}

function clearArea() {
    pencil.clearRect(0, 0, 800, 600)
}