
function animate() {
    gls.step()
    window.requestAnimationFrame(animate)
}

window.onload = () => {

    const canvas = document.getElementById('canvas')
    const drawer = new Drawer(canvas)

    gls = new Gls(data, drawer)
    window.requestAnimationFrame(animate)
}
