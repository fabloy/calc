import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRowButton = ({addElement})=>{

    return(
        <aside className='m-md-0'>
          <Button 
           variant="primary"
           onClick={()=>addElement()}
           className="m-2"
           > 
           + Row
          </Button>
        </aside>
    )
}

export default AddRowButton