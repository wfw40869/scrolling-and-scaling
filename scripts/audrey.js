const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", () => {

    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let width = (1 / 3) * window.scrollY,
        height = (1 / 4) * window.scrollY
    if (width >= 50) {
        audrey.style.width = `${width}px`
    }

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    if (height >= 100) {
        audrey.style.height = `${height}px`
    }

})