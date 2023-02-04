import React ,{useState} from "react";
import {IoIosAdd} from 'react-icons/io';
const CreateArea=({submitButton, onAdd})=> {
    const [isExpanded,setExpanded] = useState(false);
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    const handleChange=(e)=>{
        // console.log(e.target.value)
        const {name, value}=e.target;
        setNote((preValue) => {
                return{
                    ...preValue,[name]:value,
                }
        })
    }
function submitButton(event){
            onAdd(note);
            setNote({
                title:"",
                content:"",
            });
            event.preventDefault();
    }
    function handleExpanded(){
        setExpanded(true)
    }
    return(
        <div>
            <form>
            {isExpanded && (<input type='text'  value={note.title} placeholder='Title' name='title' onChange={handleChange}/>)}
                
                <p>
                    <textarea name='content' onClick={handleExpanded} value={note.content} placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 3:1}></textarea>
                </p>
                <button onClick={submitButton}><IoIosAdd size={35}/></button>
            </form>

        </div>
    )
}
export default CreateArea;