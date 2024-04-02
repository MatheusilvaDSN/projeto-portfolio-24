function clickMenu() {
    if (menu__mb.style.display == 'block') {
        menu__mb.style.display = 'none'
        btn__humb.setAttribute("src", "./assets/menu.svg")
        btn__humb.setAttribute("src", "../../assets/menu.svg")
        btn__humb.setAttribute("src", "../../../assets/menu.svg")
    } else {
        menu__mb.style.display = 'block'
        btn__humb.setAttribute("src", "./assets/close.svg")
        btn__humb.setAttribute("src", "../../assets/close.svg")
        btn__humb.setAttribute("src", "../../../assets/close.svg")
    }
}
