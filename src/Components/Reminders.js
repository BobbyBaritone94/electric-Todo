import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
const data = require('../reminders.json')

function Reminders(props) {

let [remNumber,setRemNumber]= useState(0);

let [list,setList] = useState([])

const inputRef= useRef();


const addReminder = (event)=>{
    event.preventDefault()
    // const listKey= remNumber+1
    // list.push(<li key={listKey}>{inputRef.current.value} <button onClick={()=>deleteReminder(listKey)}> - </button></li>)
    // setRemNumber(remNumber+1)
    data.reminders.push((<li >{inputRef.current.value} <button onClick={()=>deleteReminder}> - </button></li>))
}

const deleteReminder = (i)=>{
   list.splice(i-1,1)
   setRemNumber(remNumber-1)
}

const clearList = ()=>{
    setList([])
    setRemNumber(0)
}

console.log(data)
const listStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
}

//delete reminder needs to be done 
//Data sheet of reminders 
//I can pull data from the sheet but need to modify it 

    return (
        <div>
         <div className='reminderHeading'>
            <h3>{remNumber} Reminders</h3>
                <div onClick={addReminder} id='addButton'>
                    <h4>Add</h4>
                </div>
                <div onClick={clearList} id='addButton'>
                    <h4>Clear List</h4>
                </div>
            </div>
            <div style={listStyle}>
            <form>
            <input ref={inputRef}  type="text"></input>
            </form>
            <ol style={listStyle}>
                {data.reminders.map((element)=>{
                   return <li> {element}</li>
                })}
            </ol>
            </div>
            
        </div>
    );
}

export default Reminders;