import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultWrapper = ({result})=>{
    return(
        <aside 
         className='fixed-bottom mb-3'>
            <Card>
             <Card.Body
              className='text-primary h2'
             >
                {result}
             </Card.Body>
            </Card>
         </aside>
    )
}
export default ResultWrapper