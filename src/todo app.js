import React from "react"
import { useState } from "react"
import {todo} from "./data"




const Todo=()=>{
    let todolist1=[...todo]
    let [todoList, setList]=useState(todolist1)
    let [input, setInput]=useState("")

   

    const addItemHandler=(todoList)=>{
        
        
        if (input){
            setList((oldTodoList)=>{
            let newItem={id:todoList.length+1, name: input}
            let copy=[...oldTodoList]
            copy.push(newItem)
            return copy

        })

        setInput("")

        }
        
    }
    const deleteEventHandler=(id)=>{
        let newList=todoList.filter((item)=>{
            if(item.id!==id){
                return item
            }
            setList((oldList)=>{
                return newList
            })

        })
        
    }

    const Todoitem=(props)=>{
    return <div>
        <div className="item"><h3 className="">{props.item.name}</h3><button className="btn" onClick={()=>deleteEventHandler(props.item.id)}>Delete</button></div>
    </div>
}

    return(<React.Fragment>
        <section className="container">
            <div className="form">
            <h2 className="page-header1">TODO LIST APP</h2>
            <input type="text" className="" onChange={(event)=>{setInput(event.target.value)}} value={input}></input>
            <button className="btn" onClick={()=>addItemHandler(todoList)}>ADD</button>
            </div>
            <div className="itembox">{todoList.map((item)=>{
                return <Todoitem item={item} key={item.id}/>
                

            })}</div>
        </section>

    </React.Fragment>)
}

export default Todo