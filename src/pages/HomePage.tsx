import { useEffect, useState } from 'react'

import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {




// predefined fuctions are called hook. Example useEffect

const [data , setData] = useState<number>(0);
const [numberData , setNumberData] = useState<number>(0);

const numberArray = [1,2,3,4,5,6,7,8];

const people =[
  {name: "John", age: 30, status:"active" },
  {name: "Rohan", age: 22, status:"inactive"},
  {name: "Mike", age: 35, status:"active"},
];

useEffect( () => {
  addData();
},[numberData]);

const addData = () => {
  const oldData = data;
  const newData = oldData+1;
  setData(newData);
  console.log(newData);
};

const decrementData = () => {
  setNumberData(numberData -1);
};



  return (
    <>
<button title="student">
    <Link to="/student">Student-Details</Link>
</button>

<hr/>
<br/>
<br/>

<hr />
    <button title="title" onClick ={addData} className={`number ${data}`}>
       add Data </button>
   
   
    <div>Incremented data:{data}</div>
    <br/>

    <button  onClick ={decrementData} className={`decrement ${numberData}`}> decrement </button>
     
      <div>decremented Data:{numberData} </div>


{/* map method start */}

      {numberArray.map((item,i) =>{
        return <div key={i}>{item}</div>
      })}


      {/* map with object array */}

      {people.map((item,i) =>{
        return(
          
          <div key={i}>
          {
          item.status ==="active" && (
            <>
            
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            
            <br/>
            
            </>
          )}
        
          </div>
        );
      })}
     <hr/>

{/* else case  */}

     {people.map((item,i) =>{
        return(
          
          <div key={i}>
          {
          item.status ==="active" ? (
            <>
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            <br/>
            </>
          ): (
         
            <>
            
            <div> inactive </div>
            <br/>
            </>
          )}
          </div>
        );
      })}
    
    
    </>
  )
}

export default HomePage