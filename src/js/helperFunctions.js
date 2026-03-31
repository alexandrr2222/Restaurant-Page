export function DOM_creator(element, appendTo, className, source, alter, textCont){
    const DOM_element = document.createElement(element);
    if(className !== null) DOM_element.classList.add(className);
    if(source !== null) DOM_element.src = source;
    if(alter !== null) DOM_element.alt = alter;
    if(textCont !== null) DOM_element.textContent = textCont;
    appendTo.append(DOM_element);
}