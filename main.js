function mbIndex() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "./assets/menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "./assets/close.svg")
    }
}

function mbPage() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "../../assets/menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "../../assets/close.svg")
    }
}

function mbSub() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "../../../assets/menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "../../../assets/close.svg")
    }
}
