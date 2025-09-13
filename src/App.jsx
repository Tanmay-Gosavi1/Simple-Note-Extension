import React, { useEffect, useState } from 'react'
import { Check ,Circle , Trash} from 'lucide-react'

const NOTES_KEY = "simple_notes";

const App = () => {
  const [text,setText] = useState("");
  const [notes,setNotes] = useState([]);

  //to add a new note
  const addNote = ()=>{
    if(!text.trim()){
      return;
    }
    const newNote = {id : Date.now(), txt:text.trim()}
    setNotes(prev=>[newNote,...prev]);
    setText("");
  } 

  //to delete a note
  const deleteNote = (id)=>{
    setNotes(prev => prev.filter(note => note.id !== id));
  }

  //Load notes from Chrome Storage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem(NOTES_KEY);
    if (stored) {
      setNotes(JSON.parse(stored));
    }
  }, []);

  //Save notes to Chrome Storage whenever notes change
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='w-72 p-4 bg-gray-200 rounded'>
      <div className='flex flex-col items-center justify-center w-full '>
        <h1 className='text-2xl font-bold mb-4'>Simple Note</h1>
        <div className='flex justify-center items-center w-full gap-1.5 mb-4'>
          <input type="text"
            className='w-full px-2 py-1 border border-gray-900 rounded'
            placeholder='Add Note' 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>{if(e.key==='Enter') addNote()}}
          />
          <button onClick={addNote} className='font-semibold bg-green-700 text-white p-2 rounded-full cursor-pointer hover:bg-green-800'>
            <Check size={18} strokeWidth={3}/>
          </button>
        </div>
        <div className='w-full max-h-48 overflow-y-auto flex flex-col gap-2 '>
          {notes.length==0 && 
            <div className='flex flex-col items-center justify-center gap-2'>
              <div>
                <Circle size={30} strokeWidth={2.5} color='gray'/>
              </div>
              <div className='text-gray-500'>No Notes Added</div>
            </div>
          }
          {
            notes.map((note)=>(
              <div key={note.id} className='flex justify-between items-center gap-1 w-full py-1 px-2 rounded shadow-md bg-white hover:shadow-lg transition-shadow'>
                <div className='w-[90%]'>
                  <h1 className='font-semibold capitalize break-words'>{note.txt}</h1>
                </div>
                <span onClick={()=>deleteNote(note.id)} className='cursor-pointer'><Trash size={16} color='red'/></span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App