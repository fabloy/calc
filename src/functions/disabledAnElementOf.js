/*
 dato un array di elementi e un elemento che si vuole modificare,
 se uno delle proprietà id di uno degli elementi dell'array elements è uguale a
 la proprietà id dell'elemento passato come argomento "elToDisabled", all'interno dell'array viene
 effettuata la modifica sull'elemento corrispondente, la modifica consiste in un toggle che
 agisce sulla proprietà enabled: se è true diventa false e viceversa, 
 infine viene restituito l'intero array modificato:
*/

const disabledAnElementOf = (elements, elToDisabled)=>{
    let newArray = elements.map( el =>{
        elToDisabled.id === el.id ? el= {...el, enabled: !el.enabled} : el=el
        return el
       })
       
       return newArray
}

export default disabledAnElementOf