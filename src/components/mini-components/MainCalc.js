import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainCalc = ({elements,editOperator, editElement, disabledElement, deleteElement})=>{
    return(
        <section className="mb-5 d-flex align-items-start my-max-height">
           <ListGroup 
           className='m-2 w-100 d-flex justify-content-center'
           >
             {
              elements.map( (el,index) => {
                 return <ListGroup.Item 
                         key={index}
                         className={`
                          ${!el.enabled ? "bg-secondary " : "bg-light"} 
                          w-100 d-flex flex-column flex-md-row justify-content-center align-items-center mb-1
                        `}
                        >
                        <div className="col-7 col-md-4 text-center  me-md-2 d-flex justify-content-between justify-content-md-evenly " >
                         <select
                          onChange={ e=>editOperator(e.target.value, el) }
                          className='col-2 '
                         >
                          <option selected>+</option>
                          <option>-</option>
                         </select>
                         <input 
                          disabled={!el.enabled}
                          type="text"
                          value={el.value}
                          onInput={ e=>editElement(e.target.value, el) }
                          placeholder="Insert a number"
                          className='col-9 p-1'
                         />
                         </div>

                         <div className="col-7 col-md-5 d-flex justify-content-center">
                         <Button
                          variant={el.enabled ? "secondary" : "success" }
                          onClick={ ()=>disabledElement(el) }
                          className="m-1 col-6"
                         >
                          {el.enabled ? "Disabled" : "Enabled" } 
                         </Button>
                         <Button
                          variant="danger"
                          onClick={ ()=>deleteElement(el) }
                          className="m-1 col-6"
                         >
                          Delete
                         </Button>
                         </div>
                       </ListGroup.Item>
                      
                })
              }
            </ListGroup>
         </section>
    )
}
export default MainCalc