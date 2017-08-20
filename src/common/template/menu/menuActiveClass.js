
export const mapActiveUrlToMenu = () => {
    const elements = window.$('ul.sidebar-menu a')
    elements.filter(index => verify(index, elements))
}

const verify = (index, elements) => {
    let liElement = window.$(elements[index]).parent()
    var target = null
    if (elements[index].href === elements[index].baseURI) {
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