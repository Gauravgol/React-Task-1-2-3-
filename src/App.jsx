import { useState } from 'react'
 
 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
       <h1>Task 1</h1>
       <a href="/simple">Simple Jsx</a>
          
       <div className="row">
      <div className="col">
        <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>Display Simple Jsx</Card.Title>
         
        <Link to={"/simple"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
       
      <Card.Body>
        <Card.Title>Display Array of Data</Card.Title>
        <Link to={"/arr"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Show/Hide</Card.Title>
         
        <Link to={"/show"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    </div>

   
    <div className="row">
      <div className="col">
        <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Data Binding</Card.Title>
         
        <Link to={"/databinding"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Child Component</Card.Title>
         
        <Link to={"/child"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Enable/Disable</Card.Title>
        
        <Link to={"/en"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    </div>

    <div className="row">
      <div className="col">
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Sum</Card.Title>
         
        <Link to={"/sum"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
</div>
<h1>Task 2</h1>
    <div className='row'>
    <div className="col">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        
        <Link to={"/counter"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div>
    <h1>Task 3</h1>
    <div className='row'>
    <div className="col">
    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Search Filter</Card.Title>
        
        <Link to={"/search"}> <Button variant="primary">click</Button></Link>
      </Card.Body>
    </Card></div></div>
    </div>

     
    </div>
  )
}

export default App
