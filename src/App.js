import logo from './logo.svg';
import './App.css';

function App() {
//   let str = "Hello"
//   let str2 = "World"

//   if(str === "Hello" && str2 === "World")
//     {
//       console.log("Hello World")
//     }
// const collage1 = {
//   name: "rvscet",
//   address:"jamshedpur",
// };
// const college2 = {
//   name: "rvscet",
//   adress:ranchi,
// };

// const fun = () =>{
//   console.log(5+5)
// }
// if(collage1,name1 === college2.name2)
//     {
//       fun()
// console.log("hello world")
//     }else{

//     }console.log("unknown")
  const arr1= [1,2,3,4]
  for (let item of arr1){
    console.log(item)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
