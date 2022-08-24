import  {useState} from 'react';
import  './styles.css';

function App() {
  const [value, setValue] = useState(1)
   

  function increament () {
    setValue(value +1)
  };
  function decreament () {
    setValue (value -1)
    
     
  
  };

  function reset() {
    setValue(0)
    
  };


  return (
    <div>
      <h1 className='header'>A Simple Counter App</h1>
      <h2>COUNT STARTS</h2>
      <p className='count'>{value}</p>
     
      <button className='btn' onClick={increament} 
        
      disabled={value>=10}>increase</button>
    
      <button className='btn' onClick={decreament}
       disabled={value=== 0}>
       decrease
       </button>
      <div>
        <button className='btn' onClick={reset} disabled={value=== 0}>reset</button>
        <h2>Thanks Alot</h2>
      </div>
    </div>

  );
}

export default App;

