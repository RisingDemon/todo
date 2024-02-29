import { useEffect, useState } from "react";
export function CreateTodo(){
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    function handleTitle(e){
        // console.log(e.target.value);
        setTitle(e.target.value);
    }
    function handleDescription(e){
        // console.log(e.target.value);
        setDescription(e.target.value);
    }
    // post request
    async function addData(){
        const payload = {
            title,
            description
        }
        const res = await fetch("http://localhost:3000/todo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        const json = await res.json();
        console.log(json);
    }
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={handleTitle}></input><br/>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={handleDescription}></input><br/>
        
        <button onClick={addData}>add todo</button>
    </div>
}