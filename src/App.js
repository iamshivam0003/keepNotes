import React ,{useState} from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import Footer from './components/Footer';
function App(props) {
  const [notes,setNotes] = useState([]);
  const addNote=(newNote)=>{
    setNotes((preValue) => {
      return [...preValue,newNote];
    });
  }
  function deleteNotes(id){
    setNotes((prevalue)=>{
      return [...prevalue.filter((note,index)=>index !==id)]
    })
  }
  return (
    <div >
    <Header/>
    <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes in Database`}/>
   <CreateArea onAdd={addNote}/>
   {notes.map((note,index)=>(<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes}/>))}
    <Footer/>
    </div>
  );
}

export default App;
