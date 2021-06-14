let style = document.createElement('style')
style.textContent = `
.card-body.course > div > .col-12:nth-child(2) {
    visibility: hidden
}
#progressBarAndRate {
    visibility: hidden
}
`
document.head.appendChild(style)

//waitForElm(".card-body.course > div > .col-12:nth-child(2)").then(elm => {document.querySelectorAll('.card-body.course > div > .col-12:nth-child(2)').forEach(el => el.style.visibility = "hidden")})

//waitForElm("#progressBarAndRate").then(elm => {elm.style.visibility = "hidden"})


// MutationObserver
//https://stackoverflow.com/a/61511955
/*function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector) !== null) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}*/