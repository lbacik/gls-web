
function animate() {
    gls.step()
    window.requestAnimationFrame(animate)
}

window.onload = () => {

    const canvas = document.getElementById('canvas')

    // TODO GlsFactory: gls = GlsFactory.gls(data, canvas)
    const drawer = new CanvasDrawer(canvas)
    gls = new Gls(data, drawer)

    window.requestAnimationFrame(animate)
}
