import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Badge, Container } from 'react-bootstrap'

function App() {

  return (
   <Container>
    Hello
    <Badge bg='success'>Značka</Badge>
    <hr />
    <div className='podrucje'>
      Tekst
    </div>
   </Container>
  )
}

export default App
