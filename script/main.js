function clickMenu() {
    if (menu__js.style.display == 'flex') {
        menu__js.style.display = 'none'
        icon__js.setAttribute("src", "./assets/icons/Icones_mais-24.svg")
    } else {
        menu__js.style.display = 'flex'
        icon__js.setAttribute("src", "./assets/icons/Icones_menos-24.svg")
    }
}