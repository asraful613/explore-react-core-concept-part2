import './App.css'
import Counter from './Countary';
import Team from './Team';
import Users from './User';
import Friend from './Friends';
function App() {
  const showButton=(number)=>{
    alert(number-10);
  }

  function handleClick(){
    alert('button click')
  }
  const addTofive=(num) =>{
    alert(num+5);
  }

  const handleClick2=()=>{
    alert('button 2 click')
  }

  return (
    <>
     
      <h3>React Core Concepts 2</h3>
      <Friend></Friend>
      {/* <Users></Users> */}
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=> {alert('click third')}}>Click3</button>
       
      <button onClick={() => addTofive(3)}>Four</button>
      <button onClick={() => showButton(50)}>Show me</button>
    </>
  )
}

export default App
