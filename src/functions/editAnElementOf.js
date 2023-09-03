/*
 dato un array di elementi, un nuovo valore numerico da impostare e un elemento che si vuole modificare,
 se uno delle proprietà id di uno degli elementi dell'array elements è uguale a
 la proprietà id dell'elemento passato come argomento "elToEdit", all'interno dell'array viene
 effettuata la modifica sull'elemento corrispondente, la modifica consiste nell'assegnare il nuovo
 valore "newValue" alla proprietà value dell'elemento in questione per poi infine restituire 
 l'intero array con la modifica numerica della propietà value dell'elemento corrispondente a "elToEdit"
*/

const editAnElementOf = (elements, newValue ,elToEdit)=>{
    let newArray = elements.map( el =>{
        if(el.id === elToEdit.id){
           el.value = Number(newValue)
        }
        return el
    })
    return newArray
   }

   export default editAnElementOf