/*
 dato un array di elementi ("elements") e un elemento che si vuole modificare, 
 il nuovo operatore che si vuole assegnare ("newOperator") e 
 l'elemento su cui si vuole fare la modifica ("elToEdit")
 viene effettuato un controllo se l'argomento "elToEdit" è presente nell'array "elements".
 Se è presente "if(el.id === elToEdit.id)" verifico se l'argomento "newOperator" è uguale a "-"
 e modifico la proprietà "operator" dell'elemento  presente nell'array corrispondente 
  a quello passato come "elToEdit". Infine restituisco l'intero array degli elementi con l'elemento modificato:
*/

const editOperatorOf = (elements, newOperator, elToEdit)=>{
    let newArray = elements.map( el =>{
        if(el.id === elToEdit.id){
         newOperator === "-" ? el = {...el, operator:false} : el = {...el, operator:true}
        }
        return el
       })
       return newArray
}

export default editOperatorOf