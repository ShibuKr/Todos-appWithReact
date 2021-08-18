
import './App.css';
import { About } from './MyComponents/About';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { Todos } from './MyComponents/Todos';
import { Addtodo } from './MyComponents/Addtodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('todos'))
  }



   const onDelete=(todo)=>{
    console.log("I am ondelete of todo",todo)
    settodos(todos.filter((e)=>{
      return e!==todo;
}))

localStorage.setItem("todos",JSON.stringify(todos))
 
   }

   const addTodo=(title,desc)=>{
    console.log("Adding the todo",title,desc)
    let sno; 
    if(todos.length===0){
      sno=0
    }
    else{
     sno = todos[todos.length-1].sno+1}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    settodos([...todos,myTodo])
    console.log(myTodo) 
   }
   const [todos, settodos]=useState([initTodo])

   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
    
  }, [todos])
  return (
<>
<Router>
<Header title= "My todos list" searchBar={true}/>
<Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <Addtodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
</>
            )}}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

<Footer/>
</Router>

</>
   
  );
}

export default App;
