/**
 * @param  {string} selector
 * @param  {HTMLElement} node=document.body
 */
export function $(selector, node=document.body){
    return node.querySelector(selector)
}
//document.body es porque quiero que empiece a buscarlo desde el cuerpo
/**
 * @param  {string} selector
 * @param  {HTMLElement} node=document.body
 */
export function $$(selector, node=document.body){
    return [...node.querySelectorAll(selector)]
}

//export es porque lo quiero usar para mas adelante

