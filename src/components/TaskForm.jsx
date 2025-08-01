import { useState } from "react";
const TaskForm=({onSubmit,initialData})=>{
    const[title,setTitle]=useState(initialData?.title||" ")
    const[description,setDescription]=useState(initialData?.description||" ")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim() && description.trim()){
            onSubmit({title,description});
            setTitle("")
            setDescription("");
        }
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
            </div>
            <div>
                <label>Description:</label><br/><br/>
                <textarea rows="3" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit" style={{marginTop:"10px"}}>{initialData ? "Update task" : "Add task"}</button>
        </form>
        
        </>
    )
}
export default TaskForm;