
function animate() {
    gls.step()
    window.requestAnimationFrame(animate)
}

window.onload = () => {

    const canvas = document.getElementById("canvas01")
    const drawer = new Drawer(canvas)

    gls = new Gls(data, drawer)
    window.requestAnimationFrame(animate)
}
