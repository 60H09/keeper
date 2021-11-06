import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function Add(props){

    const [note,setNote] = useState({title:"",content:""});
    
    function submitNote(event) {
     props.onAdd(note)
     setNote({title:"",content:""})
     event.preventDefault();
        
    }


    function handleChange(event) {
        const {name,value} = event.target
        setNote(prev =>{
            return{...prev,[name]:value}
        })
    }


    const [expanded, setExpanded] = useState(false)
    function handleClick(){
        setExpanded(prev =>{return !prev})
        console.log(expanded)
    }

    return (<div className="create-note"><form className="create-note" >
       { expanded && (<input name='title' type='text' placeholder='title' value={note.title} onChange={handleChange}  />)}
        <textarea name='content' placeholder='take a note....' value={note.content} onChange={handleChange} rows={expanded ? '3':'1'} onClick={handleClick} />
       <Zoom in={expanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>  
    </form>
    </div>)
}

export default Add;