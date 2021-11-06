import React,{useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './note'
import notes from '../notes'
import Add from './add'
import {Firebase} from './firebase/config'

function App() {
   // console.log(Firebase)
    const [items,setItems] = useState([])
    function addNote(note) {
     setItems(prev=>{
         return [...prev,note]
     })
     console.log(items)
    }

function deleteNote(id){
 setItems(prev=>{
     return prev.filter((noteItem,index)=>{
        return index !== id
    })
})
}    


return(<div><Header />
<Add onAdd = {addNote} />
{items.map((page,index)=> (<Note key={index} index={index} title={page.title} content={page.content} onDelete={deleteNote} />))}
<Footer />
</div>)
}

export default App;