import { useEffect, useState } from "react"
import AddRowButton from "./mini-components/AddRowButton"
import ResultWrapper from "./mini-components/ResultWrapper"
import MainCalc from "./mini-components/MainCalc";
import editAnElementOf from "../functions/editAnElementOf"
import editTheOperatorOf from "../functions/editTheOperatorOf";
import disabledAnElementOf from "../functions/disabledAnElementOf";

const Calculator = ()=>{
const [result, setResult] = useState(0);
const [elements, setElements] = useState([])
const [id, setId] = useState(0)

useEffect(()=>{
//count è il valore iniziale del risultato totale da mostrare nella view:
 let count = 0;
 //ciclo su tutti gli "elements" ovvero tutte le righe di input inserite dall'utente
 elements.map(el=>{
  /*se l'elemento ha la proprietà "enabled" === true ovvero allo stato attivo,
   va tenuto in considerazione nel risultato finale dunque verifico se la proprietà operator è true,
   se è true sommo il valore di let count a quello di el.value (valore dell'elemento dell'array),
   altrimenti lo sottraggo perchè el.operator === false.
  */
  el.enabled && (el.operator ? count += el.value : count-= el.value)
 })
 setResult(count) 
}, [elements] )


//funzione di aggiunta elemento:
const addElement = ()=>{
  /*
  ogni elemento ha proprietà id, 
  value (valore numerico da conteggiare nel risultato), 
  operator (true è "+" false è "-"), 
  enabled per indicare se è allo stato attivo o diabilitato 
  e di conseguenza essere tenuto o no in considerazione per risultato finale
  */
  setElements( [...elements, {id, value:0, operator:true, enabled:true}] )
  setId(id+1)
}

//funzione di cancellazione elemento:
const deleteElement = (elToRemove)=>{
  /* 
  newArray è un nuovo array composto da tutti gli elementi
  eccetto quello passato come argomento della funz. (elToRemove)
  */
  let newArray = elements.filter(el=> el.id !== elToRemove.id)
  setElements(newArray)// <-- aggiornamento state elements con newArray che non conterrà elToRemove
}


//funzione di modifica valore numerico elemento:
const editElement = (newValue ,elToEdit)=>{
  /*
  "editAnElementOf" è una funz. esterna che effettua la modifica del valore sull'elemento corrispondente a elToEdit
  e restituisce l'intero array degli elementi modificato:
   */
 let newArray = editAnElementOf(elements, newValue ,elToEdit)
 setElements(newArray) // <-- aggiornamento dello state Elements con nuovo array modificato
}


//funzione di modifica operatore matematico dell' elemento:
const editOperator = (newOperator ,elToEdit)=>{
  /* 
  "editTheOperatorOf" è una funz. esterna che restituisce l'intero array degli elementi
  con la modifica sull'operatore matematico dell'elemento uguale a quello passato come argomento "elToEdit":
   */
 let newArray = editTheOperatorOf(elements, newOperator,elToEdit)
 setElements(newArray)
}

const disabledElement = (elToDisabled)=>{
  /* 
  "disabledAnElementOf" è una funzione esterna che restituisce l'intero array degli elementi 
  con la modifica sulla proprietà enabled dell'elemento uguale a quello passato come argomento "elToDisabled":
  */
  let newArray = disabledAnElementOf(elements, elToDisabled)
  setElements(newArray) 
}



    return(
        <main >
         <AddRowButton 
          addElement={addElement}
         />
         <MainCalc 
          elements={elements}
          editOperator = { (e,el)=>editOperator(e,el) }
          editElement = { (e,el)=>editElement(e,el) } 
          disabledElement = { (el)=>disabledElement(el) } 
          deleteElement = { (el)=>deleteElement(el) }
         />
         <ResultWrapper 
          result={result}
         />
        </main>
    )
}

export default Calculator