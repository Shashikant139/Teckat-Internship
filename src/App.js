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
  // const arr1= [1,2,3,4]
  // for (let item of arr1){
  //   console.log(item)
  // }

// const employee_Name = [
//   { employee_name: "shashikant", age: 20 },
//   { employee_name: "rahul kumar", age: 21},
//   { employee_name: "parth kumar", age: 20},
// ];

// for (let item of employee_Name){
//   console .log(item.employee_name)
// }

// employee_Name.forEach((person) =>{
//   console.log(person.age)
// })

// const employee = {
//   name: "vishal",
//   age: 20,
//   occupation: "b.tech"
// };
// for (const key in employee){
//   if (employee.hasOwnProperty(key)){
//     console.log(`${key}: ${employee[key]}`)
//   }

// }/
// const employees = [
//   {name: "rohan", age: 18, salary: 45 },
//   {name: "shivam", age: 22, salary: 50 },
//   {name: "sunil", age: 22, salary: 55 },
//   {name: "parth", age: 23, salary: 43},
// ];
// const mappedEmployees = employees.map((item) => {
//   return {

//     ...item,
//     SALARY: item.salary + 10000,
//   };
// }, [])

// console.log("employees", employees);
// console.log("mappedEmployee", mappedEmployees);

const  employee = [
  {name: "suraj", age: 40, salary: 10,category:" mobile"},
  {name: "niraj", age: 90, salary: 50,category: "cloth"},
  {name: "nitin", age: 50, salary: 20,category: "laptop"},   
  ];
  const filteredEmployee = employee.filter((item)=>{
    return item.category==="mobile";
  });
  console.log("filteredemployee",filteredEmployee);
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
