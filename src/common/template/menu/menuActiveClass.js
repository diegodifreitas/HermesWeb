
export const mapActiveUrlToMenu = () => {
    const elements = window.$('ul.sidebar-menu a')
    elements.filter(indice => verify(indice, elements))
}

const verify = (indice, elements) => {
    let liElement = window.$(elements[indice]).parent()
    var target = null
    if (elements[indice].href === elements[indice].baseURI) {
        target = liElement.addClass('active')
        target = target.parent().parent()
        if (target.is("li")) {
           target.addClass('active')
        }
        return true
    }
    else {
        target = liElement.removeClass('active')
        target = target.parent().parent()
        if (target.is("li")) {
            target.removeClass('active')
        }
        return false
    }

}