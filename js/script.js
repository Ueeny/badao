

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
    let button = document.getElementById('mobile-button')

    button.addEventListener('click', (event) => {
        button.classList.toggle('active')
    });
}