// import logo from 'logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './component/countries/countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountry() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       {countries.map(country => <DisplayCountry name={country.name.common} url={country.flags.png}></DisplayCountry>)}
//     </div>
//   )
// }

// function DisplayCountry(props) {

//   return (
//     <div className="product-style">
//       <div>
//         <img src={props.url}></img>
//         <h1>{props.name}</h1>
//       </div>
//     </div>
//   )
// }


// function LoadTodo() {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(res => res.json())
//       .then(data => setTodos(data))
//   }, [])

//   return (
//     <div>
//       {
//         todos.map(todo => <Todo title={todo.title}></Todo>)
//       }
//     </div>
//   )
// }

// function Todo(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   )
// }


// function Mobile() {
//   const [count, setCount] = useState(100)
//   const handlebtn = () => {
//     if (count > 0) {
//       setCount(count - 10);
//     }

//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handlebtn}>BatteryDown</button>
//     </div>
//   )
// }

// function LoadComments() {
//   const [comments, setComments] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(res => res.json())
//       .then(data => setComments(data))
//   }, [])

//   return (
//     <div>
//       {comments.map(comment => <Comment title={comment.name} body={comment.body} ></Comment>)}
//     </div>
//   )
// }

// function Comment(props) {
//   return (
//     <div style={{ backgroundColor: 'aquamarine', margin: '20px' }}>
//       <h1>{props.title}</h1>
//       <h3>{props.body}</h3>
//     </div>
//   )
// }


// function Counter() {
//   const [count, setState] = useState(0);
//   const handleIncrease = () => setState(count + 1);
//   const handleDecrease = () => setState(count - 1);
//   const handleReset = () => {
//     const newCount = 0;
//     setState(newCount);
//   }
//   return (
//     <div>
//       <h1>Count : {count}  </h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }







export default App;
