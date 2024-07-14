import { isValidElement, useState } from "react";
import './App.css';

function App() {
  const [age, setAge] = useState();
  const [print, setPrint] = useState();

  const handleChangeAge = (event) => {
    const newAge = parseInt(event.target.value, 10); 
    if (!isNaN(newAge)) { 
      setAge(newAge);

    }
  };
  
   // function setPrint() {
  //   const print = () => 
   //     { age >= 18 && {country : "pakistan"}? <p>You are eligible to vote.</p> : <p>you are note eligible for vote</p> }
    
    
   //   return (
   //    
    //  );
   // }
    


  return (
    <>
     <section className='w-screen h-screen bg-black'>
     <div className='w-full h-auto flex  justify-center'>
      <input
        value={age} 
        onChange={handleChangeAge}
        className="w-2/4 h-14 text-2xl m-10  font-bold rounded-full"
        placeholder="Enter your age" 
        type="number"
      />
       <button onClick={print} className="color w-28 text-black hover:text-white hover:bg-blue-900 hover:translate-y-2 m-10 h-12 rounded-sm bg-blue-400" >show</button>
      <p className="w-2/4 h-10 text-2xl m-10 text-start bg-gray-400 font-bold rounded-sm">You are eligible to vote.</p>
      </div>


     </section>
      
    
      
      

    </>
  );
}

export default App;
