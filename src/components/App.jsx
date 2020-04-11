import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {

  const[note,setNote]=useState([])

  const addNote = (note)=>{
    setNote(prevNote => {
      return [...prevNote,note]
      
    })
    
  }

  const deleteNote = id =>{
    setNote(prevNote =>{
      return prevNote.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      
      {
        note.map((noteItem,index)=>{
          return <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
