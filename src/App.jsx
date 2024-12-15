import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
function App() {
  
   function handleClick(){
    alert ('THIS IS FIRST BUTTON-1 CLICK YOU');
   }
const handleClick2 =()=>{
  alert('THIS IS SECOND BUTTON-2 CLICK YOU');
}
const addToFive =(number) =>{
  alert(number + 100);
}
  return (
    <>
      <Friends></Friends>
      <h2>Welcome React Core Concept Part-2</h2>
      <Counter></Counter>
      <Users></Users>
      


      <button onClick={handleClick}>First Button</button>
      <button onClick={handleClick2}>Second Button </button>
      <button onClick= {()=>{alert('THIS IS THIRD BUTTON-3 CLICK YOU')}}>Third Button 
          </button>
          <button onClick = {()=> addToFive(50)} >Fourth Button</button>
       
    </>
  )
}

export default App
